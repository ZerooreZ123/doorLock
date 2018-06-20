<template>
    <div class="index-root">
        <x-header title="智能门锁">
            <div class="index_chamber"> {{chamber}}</div>
        </x-header>
        <div class="index-href">
            <a slot="right" @click="onManagement">管理中心</a>
        </div>
        <div class="index-center">
            <span id="index-img" @click="onFastener">
                <i></i>
                <span class="all" :class="{'lock': isindexImg, 'tick': !isindexImg, 'fail': !isfail}"></span>
            </span>
            <p class="remarks-one">
                <i class="all-one" :class="{'click':isindexImg, 'smile': !isindexImg}"></i>
                {{remarksOne}}</p>
            <p class="remarks-two">{{remarksTwo}}</p>
        </div>
        <div class="btn-scaveng">
            <x-button type="default" link="/scavenging">扫码开启门禁</x-button>
        </div>
    </div>
</template>

<script>
    import {XButton, XHeader, Icon} from "vux";

    export default {
        components: {Icon, XButton, XHeader},
        data() {
            return {
                chamber: "7楼704",
                remarksOne: "门禁开门",
                remarksTwo: "点击长按即可开门",
                remarks: true,
                totalTime: 5,
                iconName: "info",
                isindexImg: true,
                isfail: true
            }
        },
        methods: {
            onFastener() {
                if (!this.remarks) return
                this.remarks = !this.remarks
                this.onLock()
                this.remarksOne = "开锁成功"
                this.remarksTwo = this.totalTime + 's后门锁自动刷新'
                let clock = setInterval(() => {
                    this.totalTime--
                    this.remarksOne = "开锁成功"
                    this.remarksTwo = this.totalTime + 's后门锁自动刷新'
                    if (this.totalTime < 0) {
                        clearInterval(clock)
                        this.onLock()
                        this.remarksOne = "门禁开门"
                        this.remarksTwo = "点击长按即可开门"
                        this.totalTime = 5
                        this.remarks = true
                        this.isindexImg = true
                    }
                }, 1000)
            },
            onLock() {
                if (!this.isindexImg) return
                this.isindexImg = !this.isindexImg
            },
            onManagement() {
                this.$router.push({
                    path: '/managementCenter'
                })
            }
        }
    }
</script>

<style>
    @import url('../../assets/css/entrance.css');
    @import url('../../assets/css/index.css');
</style>

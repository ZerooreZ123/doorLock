<template>
    <div>
        <x-header title="智能门锁">
        </x-header>
        <div class="index-center">
            <img src="../../assets/image/sorry.png" alt="">
            <p class="remarks-one">抱歉, 您暂无开门权限</p>
            <p class="remarks-two">租客的开门权限需要联系管理员在pc端后台设备</p>
        </div>
    </div>
</template>

<script>
    import {XButton} from "vux";

    export default {
        components: {XButton}
    }
</script>

<style>
    @import url("../../assets/css/index.css");
    @import url("../../assets/css/jurisdiction.css");
</style>

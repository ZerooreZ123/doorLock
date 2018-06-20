<template>
    <div>
        <x-header link="/entrance" title="智能门锁" :left-options="{backText:'取消'}">
            <a slot="right" >分享</a>
            <div>扫码开启门禁</div>
        </x-header>
        <div class="qr-cod">
            <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
            <p class="scavenging-one">扫码开门</p>
            <p class="scavenging-two">请将二维码对准楼宇门禁的硬件设备扫描</p>
        </div>
    </div>
</template>

<script>
    import {XButton, XHeader, Qrcode} from "vux";

    export default {
        components: {Qrcode, XButton, XHeader},
        data () {
            return {
            }
        }
    }
</script>

<style>
    @import url('../../assets/css/index.css');
    @import url('../../assets/css/scavenging.css');
</style>

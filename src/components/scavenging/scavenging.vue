<template>
  <div>
    <div class="index-seal">
      <a slot="right">分享</a>
    </div>
    <div class="qr-cod">
      <qrcode value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
      <p class="scavenging-one">扫码开门</p>
      <p class="scavenging-two">请将二维码对准楼宇门禁的硬件设备扫描</p>
    </div>
  </div>
</template>

<script>
  import {Qrcode} from "vux";

  export default {
    components: {Qrcode},
    data() {
      return {}
    }
  }
</script>

<style>
  @import url('../../assets/css/index.css');
  .qr-cod {
    text-align: center;
    position: fixed;
    width: 100%;
    top: 240px;
  }

  .index-seal {
    text-align: right;
    position: fixed;
    right: 20px;
  }

  .index-seal a {
    color: #4591e4;
    font-size: 32px;
    font-weight: 600;
  }

  .scavenging-one {
    color: #000;
    font-weight: 600;
    margin-top: 20px;
    font-size: 32px;
  }

  .scavenging-two {
    margin: 24px auto 0;
    font-size: 26px;
    color: #808080;
  }
</style>

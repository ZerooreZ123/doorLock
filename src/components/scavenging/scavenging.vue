<template>
  <div class="wrap">
    <div class="index-seal" @click="halve">分享</div>
    <div class="qr-cod flex-column">
      <div class="qrBox flex-center">
        <qrcode :value='qrString' :size=180 type="img"></qrcode>
      </div>
      <p class="scavenging-one">扫码开门</p>
      <p class="scavenging-two">请将二维码对准楼宇门禁的硬件设备扫描</p>
    </div>
    <div class="mask flex-center" v-if="isMask">
      <div class="masktop" @click="closeMask"></div>
      <div class="box flex-center">
        <img class="x" :src="require('@/assets/img/icon/x.png')" @click="closeMask">
        <div class="text">现仅支持截屏通过第三方分享</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Qrcode } from "vux";
import NetRequest from "@/utils/NetRequest";
export default {
  components: { Qrcode },
  data() {
    return {
      qrString: "1",
      isMask: false
    };
  },
  mounted() {
    document.querySelector("title").innerText = "扫码开启门禁";
    this.getScanCode();
  },
  methods: {
    halve() {
      this.isMask = true;
    },
    closeMask() {
      this.isMask = false;
    },
    async getScanCode() {
      const Id = JSON.parse(window.sessionStorage.getItem("info")).room;
      const userType = JSON.parse(window.sessionStorage.getItem("info")).type;
      const data = await NetRequest.postUrl("scanCode", { id: Id, type: userType });
      console.log(data);
    }
  }
};
</script>

<style>
.wrap {
  position: relative;
}
.qr-cod {
  margin-top: 214px;
}
.qrBox {
  width: 462px;
  height: 462px;
  border: 2px solid #eff6fd;
  border-radius: 6px;
  box-shadow: 10px 10px 10px #eff6fd;
}
.index-seal {
  position: fixed;
  top: 30px;
  right: 30px;
  font-size: 30px;
  color: #4591e4;
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
  margin-top: 24px;
  font-size: 26px;
  color: #808080;
}
.mask,
.masktop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.mask {
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
}
.masktop {
  z-index: 150;
}
.box {
  z-index: 200;
  position: relative;
  width: 82.6%;
  height: 180px;
  border-radius: 5px;
  background: #fff;
}
.x {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
}
.text {
  font-size: 34px;
  color: #000;
}
</style>

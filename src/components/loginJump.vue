<template>
  <div class="wrap flex-center">
    <div class="photoBox">
      <img class="loading" :src="require('@/assets/loading.gif')">
    </div>
  </div>
</template>
<script>
import NetRequest from "@/utils/NetRequest";
export default {
  mounted() {
    setTimeout(() => {
      window.workgo.getAuth(window.appId, window.secretKey, result => {
        if (result.success) {
          window.workgo.getUserInfo(result => {
            this.jump(result.mobile);
          });
        } else {
          alert(result.errMsg);
        }
      });
    }, 200);
    document.querySelector("title").innerText = "登录";
  },
  methods: {
    async jump(mobile) {
      const data = await NetRequest.post("userLogin", { phone: mobile });
      if (data.length > 0) {
        if (data[0].type === "0") {
          this.$router.replace({
            path: "/administrator"
          });
        } else {
          this.$router.replace({
            path: "/home"
          });
        }
        window.sessionStorage.setItem("info", JSON.stringify(data[0]));
      } else {
        this.$router.replace({
          path: "/jurisdiction"
        });
      }
    }
  }
};
</script>
<style scoped>
.wrap {
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.photoBox {
  width: 202px;
  height: 202px;
}
.loading {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>

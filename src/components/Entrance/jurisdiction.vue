<template>
  <div>
    <div class="index-center">
      <img src="@/assets/image/sorry.png" alt="">
      <p class="remarks-one">抱歉, 您暂无开门权限</p>
      <p class="remarks-two">租客的开门权限需要联系管理员在pc端后台设备</p>
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
    }, 500);
    document.querySelector("title").innerText = "智能门锁";
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
      }
    }
  }
};
</script>

<style>
.index-center {
  position: fixed;
  width: 100%;
  top: 360px;
}

.index-center .remarks-one {
  margin: 32px auto 0;
  font-size: 34px;
  font-weight: 600;
}

.index-center .remarks-two {
  color: #999;
  font-size: 30px;
  margin: 24px auto 0;
}

.index-center img {
  width: 40%;
  height: 300px;
}
</style>

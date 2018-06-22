<template>
  <div>
    <div class="index-center">
      <img src="../../assets/image/sorry.png" alt="">
      <p class="remarks-one">抱歉, 您暂无开门权限</p>
      <p class="remarks-two">租客的开门权限需要联系管理员在pc端后台设备</p>
    </div>
  </div>
</template>

<script>
import NetRequest from "@/utils/NetRequest";
export default {
  mounted() {
    document.querySelector("title").innerText = "智能门锁";
    this.jump();
  },
  methods: {
    selectSex(i) {
      this.sexSective = i;
    },
    async jump() {
      const data = await NetRequest.post("userLogin", { phone: "15015010211" });
      if (data.type === "0") {
        this.$router.push({
          path: "/home"
        });
      } else {
        console.log(data);
        this.$router.push({
          path: "/administrator"
        });
      }
    }
  }
};
</script>

<style>
@import url("../../assets/css/index.css");

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

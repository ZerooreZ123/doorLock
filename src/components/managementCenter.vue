<template>
  <div class="wrap">
    <div class="group">
      <div class="item flex-between">
        <span>手机号</span>
        <span>13848975587</span>
      </div>
      <div class="item flex-between" @click="setName">
        <span>姓名</span>
        <span class="flex-center">王大宏
          <img class="icon" :src="require('@/assets/img/icon/go.png')" alt="">
        </span>
      </div>
      <div class="item flex-between" @click="setSex">
        <span>性别</span>
        <span class="flex-center" @click="setSex">设置
          <img class="icon" :src="require('@/assets/img/icon/go.png')" alt="">
        </span>
      </div>
    </div>
    <div class="group" @click="goCenter">
      <div class="item flex-between">
        <span>人脸识别</span>
        <span class="flex-center">设置
          <img class="icon" :src="require('@/assets/img/icon/go.png')" alt="">
        </span>
      </div>
    </div>
    <div class="group" @click="setPassword">
      <div class="item flex-between">
        <span>修改设置密码</span>
        <img class="icon" :src="require('@/assets/img/icon/go.png')" alt="">
      </div>
    </div>
  </div>
</template>
<script>
// import NetRequest from "@/utils/NetRequest";
export default {
  data() {
    return {};
  },
  watch: {},
  mounted() {
    document.querySelector("title").innerText = "管理中心";
  },
  methods: {
    click(key) {
      console.log(key);
    },
    setName() {
      this.$router.push({ path: "/settingName" });
    },
    setSex() {
      this.$router.push({ path: "/settingSex" });
    },
    setPassword() {
      this.$router.push({ path: "/settingPassword" });
    },
    goCenter() {
      this.$router.push({ path: "/settingPhoto" });
    }
  }
};
</script>

<style scoped>
.wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f3f5f7;
  font-size: 28px;
}
.group {
  padding: 0 20px;
  margin-bottom: 20px;
  background: #fff;
  border-top: 2px solid #f6f6f6;
  border-bottom: 2px solid #f6f6f6;
}
.item {
  height: 90px;
  border-bottom: 1px solid #f6f6f6;
}
.icon {
  width: 16px;
  height: 24px;
  margin-left: 14px;
}
</style>

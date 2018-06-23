<template>
  <div class="wrap">
    <div class="group">
      <div class="item flex-between">
        <span>手机号</span>
        <span>{{phone}}</span>
      </div>
      <div class="item flex-between" @click="setName">
        <span>姓名</span>
        <span class="flex-center">{{name}}
          <img class="icon" :src="require('@/assets/img/icon/go.png')" alt="">
        </span>
      </div>
      <div class="item flex-between" @click="setSex">
        <span>性别</span>
        <span class="flex-center" @click="setSex">{{sex}}
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
    <div v-if="type === '0'?false:true" class="group" @click="setPassword">
      <div class="item flex-between">
        <span>修改设置密码</span>
        <img class="icon" :src="require('@/assets/img/icon/go.png')" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import NetRequest from "@/utils/NetRequest";
export default {
  data() {
    return {
      name: "",
      sex: "",
      type: JSON.parse(window.sessionStorage.getItem("info")).type,
      phone: JSON.parse(window.sessionStorage.getItem("info")).phone
    };
  },
  watch: {},
  mounted() {
    this.info();
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
    },
    async info() {
      const userId = JSON.parse(window.sessionStorage.getItem("info")).id;
      const type = JSON.parse(window.sessionStorage.getItem("info")).type;
      if (type === "0") {
        const data = await NetRequest.post("getAdminInfo", { id: userId });
        this.name = data[0].name;
        this.sex = data[0].sex;
      } else {
        const data = await NetRequest.post("getTenantInfo", { id: userId });
        this.name = data[0].name;
        this.sex = data[0].sex;
      }
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

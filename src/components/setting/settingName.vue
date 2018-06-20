<template>
  <div class="wrap">
    <div class="inputBox flex-between">
      <input type="text" class="inputName" v-model="inputText">
      <img class="icon" :src="require('@/assets/img/icon/x.png')" v-if="isShow" @click="clear" alt="">
    </div>
    <div class="buttonBox flex-center">
      <div class="button flex-center">完成</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputText: "",
      isShow: false
    };
  },
  watch: {
    inputText() {
      if (this.inputText) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  methods: {
    clear() {
      this.inputText = "";
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
}
.inputBox {
  width: 100%;
  height: 90px;
  background: #fff;
  border-bottom: 2px solid #f6f6f6;
}
.inputName {
  height: 40%;
  width: 80%;
  font-size: 30px;
  padding: 0;
  border: none;
  outline: none;
  text-indent: 20px;
}
.icon {
  display: inline-block;
  width: 26px;
  height: 26px;
  margin-right: 28px;
}
.buttonBox {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
}
.button {
  width: 83.2%;
  height: 78px;
  font-size: 30px;
  color: #65a2e6;
  border: 2px solid #65a2e6;
  border-radius: 4px;
}
</style>

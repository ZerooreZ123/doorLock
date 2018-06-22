<template>
  <div class="wrap">
    <div class="inputBox flex-between">
      <input type="text" class="inputName" v-model="inputText">
      <img class="icon" :src="require('@/assets/img/icon/x.png')" v-if="isShow" @click="clear" alt="">
    </div>
    <div class="buttonBox flex-center">
      <div @click="refer" :class="inputText === ''?'buttonTint flex-center' : 'buttonDeep flex-center'">完成</div>
    </div>
    <tip-mes :msg="message" v-if="isDisplay"></tip-mes>
  </div>
</template>
<script>
import TipMes from "@/components/common/tipMes";
import NetRequest from "@/utils/NetRequest";
export default {
  components: {
    TipMes
  },
  data() {
    return {
      isDisplay: false,
      message: {},
      inputText: "",
      isShow: false
    };
  },
  mounted() {
    document.querySelector("title").innerText = "设置名字";
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
    },
    async refer() {
      if (this.inputText === "") {
        this.isDisplay = true;
        this.message = { name: "没有输入名字，请重新填写", isShow: false };
        setTimeout(() => {
          this.isDisplay = false;
        }, 1.5e3);
        return false;
      }
      const data = await NetRequest.post("updateAdminInfo", { name: "陈大山", sex: "女", id: 15 });
      this.isDisplay = true;
      this.message = { name: "正在加载", isShow: true };
      if (data.success === "T") {
        this.message = { name: "设置成功", isShow: false };
        setTimeout(() => {
          this.isDisplay = false;
        }, 1.5e3);
      } else {
        // alert(data.errorMsg);
        this.isDisplay = false;
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
  background: #f3f3f3;
}
.inputBox {
  width: 100%;
  height: 90px;
  background: #fff;
  border-bottom: 2px solid #f0f0f0;
}
.inputName {
  height: 48%;
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
.buttonDeep,
.buttonTint {
  width: 83.2%;
  height: 78px;
  font-size: 30px;
  border-radius: 4px;
}
.buttonDeep {
  color: #65a2e6;
  border: 2px solid #65a2e6;
}
.buttonTint {
  color: #c8daef;
  border: 2px solid #c8daef;
}
</style>

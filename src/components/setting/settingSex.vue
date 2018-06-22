<template>
  <div class="wrap">
    <div class="group">
      <div class="sexItem flex-between" v-for="(item,index) in sexBox" :key="index" @click="selectSex(index)">
        <div class="sex">{{item}}</div>
        <img class="icon" :src="require('@/assets/img/icon/Tick.png')" v-if="sexSective=== index? true: false" alt="">
      </div>
    </div>
    <div>
      <div class="buttonBox flex-center">
        <div @click="refer" class="button flex-center">完成</div>
      </div>
    </div>
  </div>
</template>
<script>
import NetRequest from "@/utils/NetRequest";
export default {
  data() {
    return {
      sexSective: 0,
      sexBox: ["男", "女"]
    };
  },
  watch: {},
  mounted() {
    document.querySelector("title").innerText = "设置性别";
  },
  methods: {
    selectSex(i) {
      this.sexSective = i;
    },
    async refer() {
      const data = await NetRequest.post("updateAdminInfo", { name: "陈大山", sex: this.sexBox[this.sexSective], id: 15 });
      if (JSON.parse(data).result === "T") {
      } else {
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
.group {
  padding: 0 28px;
  background: #fff;
  border-bottom: 2px solid #f0f0f0;
}
.sexItem:nth-child(1) {
  border-bottom: 2px solid #f0f0f0;
}
.sexItem {
  width: 100%;
  height: 90px;
  background: #fff;
}
.sex {
  font-size: 30px;
  padding: 0;
}
.icon {
  display: inline-block;
  width: 30px;
  height: 24px;
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

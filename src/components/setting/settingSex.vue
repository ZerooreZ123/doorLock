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
        <div class="button flex-center">完成</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sexSective: 0,
      sexBox: ["男", "女"]
    };
  },
  watch: {},
  methods: {
    selectSex(i) {
      this.sexSective = i;
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
.group {
  padding: 0 28px;
  background: #fff;
  border-bottom: 2px solid #f6f6f6;
}
.sexItem:nth-child(1) {
  border-bottom: 2px solid #f6f6f6;
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

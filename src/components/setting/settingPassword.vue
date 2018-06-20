<template>
  <div class="wrap">
    <div class="floor flex-between">
      <span>房号</span>
      <span class="num">1层202</span>
    </div>
    <div class="setting ">
      <div class="item flex-between">
        <span>旧密码</span>
        <input type="password" placeholder="请输入旧密码">
      </div>
      <div class="item flex-between">
        <span>新密码</span>
        <input type="password" placeholder="请输入新密码">
      </div>
      <div class="setPassword flex-between">
        <span>确认密码</span>
        <input type="password" placeholder="请再次输入新密码">
      </div>
    </div>
    <div class="tip flex-end">密码必须是6至8位纯数字</div>
    <div class="buttonBox flex-center">
      <div class="button flex-center">完成</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {}
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
.floor {
  height: 90px;
  font-size: 28px;
  padding: 0 28px;
  border-bottom: 2px solid #f6f6f6;
  color: #999;
}
.floor:nth-child(2) {
  color: #000;
}
.setting {
  background: #fff;
  font-size: 26px;
}
.item {
  height: 90px;
  border-bottom: 2px solid #f6f6f6;
  margin: 0 28px;
}
.setPassword {
  height: 90px;
  border-bottom: 2px solid #f6f6f6;
  padding: 0 28px;
  color: #999;
}
.item > span {
  color: #999;
}
.num {
  color: #000;
}
.item > input,
.setPassword > input {
  border: 0;
  outline: none;
  background: #fff;
  text-align: right;
  color: #000;
}
input::-webkit-input-placeholder {
  color: #c6c6c6;
}
.tip {
  font-size: 24px;
  height: 74px;
  margin-right: 28px;
  color: #787878;
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

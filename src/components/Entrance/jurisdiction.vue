<template>
  <div>
    <div class="index-center">
      <img src="@/assets/img/sorry.png" alt="">
      <p class="remarks-one">抱歉, 您暂无开门权限</p>
      <p class="remarks-two">租客的开门权限需要联系管理员在pc端后台设备</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector("title").innerText = "智能门锁";
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
  width: 250px;
  height: 250px;
}
</style>

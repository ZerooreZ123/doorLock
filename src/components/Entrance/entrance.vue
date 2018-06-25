<template>
  <div class="index-root">
    <div class="index-href">
      <a slot="right" @click="onManagement">管理中心</a>
    </div>
    <div class="index-center">
      <span id="index-img" @click="onFastener(room)">
        <i></i>
        <span class="all" :class="{'lock': isindexImg, 'tick': !isindexImg, 'fail': isfail}"></span>
      </span>
      <p class="remarks-one">
        <i class="all-one" :class="{'click':isindexImg, 'smile': !isindexImg}"></i>
        {{remarksOne}}
      </p>
      <p class="remarks-two">{{remarksTwo}}</p>
    </div>
    <div class="buttonBox flex-center">
      <div @click="onScavenging" class="button flex-center">扫码开启门禁</div>
    </div>
  </div>
</template>

<script>
// import NetRequest from "@/utils/NetRequest";

export default {
  data() {
    return {
      room: JSON.parse(window.sessionStorage.getItem("info")).address,
      remarksOne: "门锁开门",
      remarksTwo: "点击长按即可开门",
      remarks: true,
      totalTime: 5,
      iconName: "info",
      isindexImg: true,
      isfail: false
    };
  },
  mounted() {
    document.querySelector("title").innerText = this.room;
  },
  methods: {
    async onFastener(room) {
      if (!this.remarks) return;
      this.remarks = !this.remarks;
      console.log(room);
      this.onLock();
      // let data = await NetRequest.postUrl("openDoor", {rooms: "room"})
      // console.log(data);
      this.remarksOne = "开锁成功";
      this.remarksTwo = this.totalTime + "s后门锁自动刷新";
      let clock = setInterval(() => {
        this.totalTime--;
        this.remarksTwo = this.totalTime + "s后门锁自动刷新";
        if (this.totalTime < 0) {
          clearInterval(clock);
          this.onLock();
          this.remarksOne = "门锁开门";
          this.remarksTwo = "点击长按即可开门";
          this.totalTime = 5;
          this.remarks = true;
          this.isindexImg = true;
        }
      }, 1000);
    },
    onLock() {
      if (!this.isindexImg) return;
      this.isindexImg = !this.isindexImg;
    },
    onManagement() {
      this.$router.push({
        path: "/managementCenter"
      });
    },
    onScavenging() {
      this.$router.push({
        path: "/scavenging"
      });
    }
  }
};
</script>

<style>
.index-href {
  text-align: right;
  position: fixed;
  top: 1px;
  right: 16px;
}

.index-href a {
  color: #4591e4;
  font-size: 32px;
  font-weight: 600;
}

.index-root button {
  color: #4591e4;
  border-radius: 8px;
  border: 2px solid #4591e4;
  width: 88%;
  font-size: 38px;
  line-height: 80px;
  background-color: #fff;
}
.index-root .index-center {
  position: fixed;
  top: 180px;
  width: 100%;
}

.index-center .remarks-one {
  font-size: 36px;
  font-weight: 500;
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
}

.index-center .remarks-one .all-one {
  display: inline-block;
  background-size: 100% 100%;
  position: relative;
}

.index-center .remarks-one .click {
  background: url("../../../static/images/click.png");
  background-size: 100% 100%;
  top: 8px;
  width: 36px;
  height: 40px;
}

.smile {
  background: url("../../../static/images/smile.png");
  top: 8px;
  width: 40px;
  height: 40px;
}

.sad {
  background: url("../../../static/images/sad.png");
  top: 8px;
  width: 40px;
  height: 40px;
}

.index-center .remarks-two {
  color: #999;
  font-size: 28px;
  margin-top: 32px;
}

.index-center #index-img i {
  background: url("../../../static/images/index.png");
  background-size: 100% 100%;
  display: inline-block;
  width: 70%;
  height: 525px;
}

.index-center #index-img i:active {
  background: url("../../../static/images/HoldDowm.png");
  background-size: 100% 100%;
}

.index-center #index-img .all {
  display: inline-block;
  background-size: 100% 100%;
  position: fixed;
}

.index-center #index-img .lock {
  background: url("../../../static/images/lock.png");
  background-size: 100% 100%;
  width: 64px;
  height: 86px;
  left: 46%;
  top: 400px;
}

.tick {
  background: url("../../../static/images/Tick.png");
  width: 116px;
  height: 84px;
  left: 44%;
  top: 408px;
}

.fail {
  background: url("../../../static/images/fail.png");
  width: 20px;
  height: 114px;
  left: 49%;
  top: 390px;
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

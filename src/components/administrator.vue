<template>
  <div class="wrap">
    <div class="header">
      <div class="site flex-between">
        <div @click="openStore" class="flex-center">{{storeName}}
          <img class="icon" :src="require('@/assets/img/icon/down.png')" alt="">
        </div>
        <div class="QR" @click="openDoor">扫码开启门禁</div>
      </div>
    </div>
    <div class="content">
      <div class="floor">
        <div @click="selectFloor(index)" :class="floorIndex===index?'floorActive':'floorItem'" v-for="(i,index) in 13" :key="index">{{`${i}层`}}</div>
      </div>
      <div class="room">
        <span @click="selectRoom($event,index)" class="roomItem" v-for="(i,index) in 20" :key="index">{{`120${i}`}}
        </span>
      </div>
    </div>
    <div class="buttonGrounp flex-center">开启门锁</div>
    <div class="ball flex-center" @click="goCenter">管理中心</div>
    <div class="mask" v-if="isMask">
      <div class="masktop" @click="closeMask"></div>
      <div class="store">
        <div @click="selectStore(item)" :class="storeName === item?'storeActive':'storeItem'" v-for="(item,index) in storeList" :key="index">{{item}}
          <img class="draw" :src="require('@/assets/img/icon/Tick.png')" v-if="storeName === item?true:false ">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      storeName: "中和路店",
      isMask: false,
      isPhoto: false,
      classItem: "",
      isShow: false,
      floorIndex: 0,
      roomIndex: 0,
      arr: [],
      storeList: ["同心路店", "玉桥店", "景祥店", "中和路店"]
    };
  },
  mounted() {
    document.querySelector("title").innerText = "智能门锁";
  },
  watch: {
    selectCheckbox() {
      this.getRoomNum(this.selectCheckbox);
    }
  },
  methods: {
    goCenter() {
      this.$router.push({ path: "/managementCenter" });
    },
    openDoor() {
      this.$router.push({ path: "/scavenging" });
    },
    selectFloor(num) {
      this.floorIndex = num;
    },
    selectRoom(e, num) {
      if (e.target.className.indexOf("selectRoom") === -1) {
        e.target.className = "selectRoom";
        this.arr.push(num);
      } else {
        e.target.className = "roomItem";
        this.arr.splice(this.arr.indexOf(num), 1);
      }
    },
    selectStore(name) {
      this.storeName = name;
      this.isMask = false;
    },
    openStore() {
      this.isMask = true;
    },
    closeMask() {
      this.isMask = false;
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 500;
}
.site {
  height: 102px;
  padding: 0 30px;
  border-bottom: 3px solid #f6f6f6;
  font-size: 28px;
  color: #000;
}
.icon {
  display: inline-block;
  width: 25px;
  height: 15px;
  padding-left: 10px;
}
.draw {
  /* display: inline-block; */
  width: 30px;
  height: 24px;
  float: right;
}
.QR {
  color: #4591e4;
}
.content {
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 102px;
}
.floor {
  width: 16%;
  background: #fff;
  padding-bottom: 115px;
  /* position: fixed;
  left: 0;
  bottom: 100px;
  height: 85%;
  overflow-y: scroll;
  white-space: nowrap; */
}

.floorItem {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  font-size: 30px;
  color: #767676;
  background: #fff;
  border-top: 1px solid #f6f6f6;
}
.floorActive {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #4591e4;
  width: 100%;
  height: 80px;
  border-left: 5px solid #4591e4;
  background: #f3f3f3;
}
.room {
  width: 80%;
  /* margin-left: 16%; */
  background: #f3f3f3;
  padding: 15px 15px 115px;
}

.roomItem {
  position: relative;
  float: left;
  width: 116px;
  padding: 26px 0;
  text-align: center;
  margin: 15px;
  border: 2px solid #bdd6f2;
  font-size: 26px;
  color: #000;
}
.selectRoom {
  float: left;
  width: 116px;
  padding: 26px 0;
  text-align: center;
  margin: 15px;
  border: 2px solid #4591e4;
  font-size: 26px;
  color: #4591e4;
  background: url("../../static/images/gou.png") right 54px no-repeat;
  background-size: 40px 34px;
}
.gou {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 24px;
  float: right;
}
.buttonGrounp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  font-size: 28px;
  color: #fff;
  background: #4591e4;
}

.ball {
  position: fixed;
  bottom: 130px;
  right: 30px;
  width: 58px;
  height: 58px;
  padding: 22px;
  border-radius: 50%;
  font-size: 28px;
  color: #4591e4;
  box-shadow: 2px 4px 8px #bfbfbf;
}
.mask,
.masktop {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
}

.mask {
  z-index: 100;
  top: 102px;
  background: rgba(0, 0, 0, 0.5);
}
.masktop {
  z-index: 150;
}
.store {
  width: 100%;
  background: #fff;
}

.storeItem {
  position: relative;
  z-index: 200;
  text-align: center;
  padding: 26px;
  border-top: 2px solid #f6f6f6;
  font-size: 28px;
  color: #000;
}
.storeActive {
  text-align: center;
  padding: 26px;
  border-top: 2px solid #f6f6f6;
  font-size: 28px;
  color: #4591e4;
}
</style>

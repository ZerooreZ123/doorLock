<template>
  <div class="wrap">
    <div class="header">
      <div class="site flex-between">
        <div @click="openStoreList" class="flex-center">{{storeName.name}}
          <img class="icon" :src="require('@/assets/img/icon/down.png')" alt="">
        </div>
        <div class="QR" @click="goQR">扫码开启门禁</div>
      </div>
    </div>
    <div class="content">
      <div class="floor">
        <div @click="selectFloor(index,i)" :class="floorIndex===index?'floorActive':'floorItem'" v-for="(i,index) in floorList" :key="index">{{i.floor}}</div>
      </div>
      <div class="room">
        <span @click="selectRoom(item,index)" :class="item.active&&roomIndex ===index ? 'selectRoom' : 'roomItem'" v-for="(item,index) in num" :key="index">{{item.number}}
        </span>
      </div>
    </div>
    <div class="buttonGrounp flex-center" @click="openDoor">开启门锁</div>
    <div class="ball flex-center" @click="goCenter">管理中心</div>
    <div class="mask" v-if="isMask">
      <div class="masktop" @click="closeMask"></div>
      <div class="store">
        <div @click="selectStore(item)" :class="storeName.name === item.name?'storeActive':'storeItem'" v-for="(item,index) in storeList" :key="index">{{item.name}}
          <img class="draw" :src="require('@/assets/img/icon/Tick.png')" v-if="storeName.name === item.name?true:false ">
        </div>
      </div>
    </div>
    <tip-mes :msg="message" v-if="isDisplay"></tip-mes>
  </div>
</template>
<script>
import NetRequest from "@/utils/NetRequest";
import TipMes from "@/components/common/tipMes";
export default {
  components: {
    TipMes
  },
  data() {
    return {
      isDisplay: false,
      storeName: {},
      isMask: false,
      isPhoto: false,
      classItem: "",
      isShow: false,
      floorIndex: 0,
      roomIndex: "",
      buildingId: JSON.parse(window.sessionStorage.getItem("info")).building,
      storeId: JSON.parse(window.sessionStorage.getItem("info")).building.split(",")[0],
      storeList: [],
      floorList: [],
      numList: [],
      num: []
    };
  },
  mounted() {
    document.querySelector("title").innerText = "智能门锁";
    this.getBuilding();
    this.getVirginInfo(this.storeId);
  },
  watch: {
    selectCheckbox() {
      this.getRoomNum(this.selectCheckbox);
    }
  },
  methods: {
    selectRoom(el, i) {
      this.roomIndex = i;
      if (el.active) {
        el.active = false;
      } else {
        this.num.forEach(e => {
          e.active = false;
        });
        el.active = true;
      }
      this.$set(this.num, i, el);
    },
    async getVirginInfo(Id) {
      const data = await NetRequest.post("getBuilding", { building: Id });
      const dataFloor = await NetRequest.post("getFloor", { building: data[0].id });

      if (dataFloor.length > 0) {
        this.floorList = dataFloor;
        this.floorIndex = 0;
        const dataNumber = await NetRequest.post("getNumber", { building: data[0].id, floor: dataFloor[0].floor });

        if (dataNumber.length > 0) {
          dataNumber.forEach(el => {
            el.active = false;
          });
          this.floorList[0].num = dataNumber;
          this.num = this.floorList[0].num;
        } else {
          this.num = [];
        }
      } else {
        this.floorList = [];
        this.num = [];
      }
    },
    async getBuilding() {
      const data = await NetRequest.post("getBuilding", { building: this.buildingId });
      if (data.length > 0) {
        this.storeList = data;
        this.storeName = data[0];
      }
    },
    async selectFloor(num, F) {
      const data = await NetRequest.post("getNumber", { building: this.storeName.id, floor: F.floor });
      this.floorIndex = num;
      // F.num = data;
      this.num = data;
    },
    selectStore(info) {
      this.getVirginInfo(info.id);
      this.storeName = info;
      this.isMask = false;
    },
    openStoreList() {
      this.isMask = true;
    },
    async openDoor() {
      const arr = [];
      this.num.forEach(item => {
        if (item.active) {
          arr.push(item.id);
        }
      });
      if (arr.length < 1) {
        this.isDisplay = true;
        this.message = { name: "请选择开锁房间", isShow: false };
        setTimeout(() => {
          this.isDisplay = false;
        }, 1.5e3);
        return false;
      }
      const data = await NetRequest.postUrl("/openDoor", { room: arr.toString() });
      if (JSON.stringify(data) === "{}") {
        this.isDisplay = true;
        this.message = { name: "开锁成功", isShow: false };
        setTimeout(() => {
          this.isDisplay = false;
        }, 1.5e3);
      }
    },
    closeMask() {
      this.isMask = false;
    },
    goCenter() {
      this.$router.push({ path: "/managementCenter" });
    },
    goQR() {
      this.$router.push({ path: "/scavenging" });
    }
  }
};
</script>

<style scoped>
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 88%;
}
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
  border-bottom: 2px solid #f6f6f6;
  box-shadow: 0px 4px 4px #d9d9d9;
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
  position: absolute;
  right: 26px;
  top: 32px;
  width: 30px;
  height: 24px;
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
  border-bottom: 1px solid #f6f6f6;
  border-top: 1px solid #f6f6f6;
}
.floorActive {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #4591e4;
  width: 96%;
  height: 80px;
  border-left: 6px solid #4591e4;
  border-bottom: 1px solid #f6f6f6;
  border-top: 1px solid #f6f6f6;
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
  box-shadow: 2px 8px 8px #bfbfbf;
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
  position: relative;
  text-align: center;
  padding: 26px;
  border-top: 2px solid #f6f6f6;
  font-size: 28px;
  color: #4591e4;
}
</style>

import Vue from "vue";
import Router from "vue-router";

const Home = resolve => require(["@/components/entrance/entrance"], resolve);
const Scavenging = resolve => require(["@/components/scavenging/scavenging"], resolve);
const Jurisdiction = resolve => require(["@/components/entrance/jurisdiction"], resolve);
const Administrator = resolve => require(["@/components/administrator"], resolve);
const ManagementCenter = resolve => require(["@/components/managementCenter"], resolve);
const SettingName = resolve => require(["@/components/setting/settingName"], resolve);
const SettingPassword = resolve => require(["@/components/setting/settingPassword"], resolve);
const SettingSex = resolve => require(["@/components/setting/settingSex"], resolve);
const LoginJump = resolve => require(["@/components/loginJump"], resolve);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: LoginJump
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/scavenging",
      name: "scavenging",
      component: Scavenging
    },
    {
      path: "/jurisdiction",
      name: "jurisdiction",
      component: Jurisdiction
    },
    {
      path: "/administrator",
      name: "Administrator",
      component: Administrator
    },
    {
      path: "/managementCenter",
      name: "ManagementCenter",
      component: ManagementCenter
    },
    {
      path: "/settingName",
      name: "SettingName",
      component: SettingName
    },
    {
      path: "/settingPassword",
      name: "SettingPassword",
      component: SettingPassword
    },
    {
      path: "/settingSex",
      name: "SettingSex",
      component: SettingSex
    }
  ]
});

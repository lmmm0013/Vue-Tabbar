import Tabbar from "./Tabbar";
import TabbarItem from "./TabbarItem";
const MyTabbar = {
  install(Vue) {
    Vue.component("Tabbar", Tabbar);
    Vue.component("TabbarItem", TabbarItem);
  }
};

export default MyTabbar;

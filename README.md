# 引用

``` javascript
import MyTabbar from './components/MyTabbar/MyTabbar'
Vue.use(MyTabbar)
```

# 示例

``` html
<Tabbar>
  <TabbarItem to="/" name="index">
    <img slot="icon" src="./assets/img/tabbar-index.png" alt="">
    <img slot="iconActive" src="./assets/img/tabbar-index-active.png" alt="">
    首页
  </TabbarItem>
  <TabbarItem to="/order" name="order">
    <img slot="icon" src="./assets/img/tabbar-order.png" alt="">
    <img slot="iconActive" src="./assets/img/tabbar-order-active.png" alt="">
    订单
  </TabbarItem>
  <TabbarItem to="/my" name="my">
    <img slot="icon" src="./assets/img/tabbar-my.png" alt="">
    <img slot="iconActive" src="./assets/img/tabbar-my-active.png" alt="">
    我的
  </TabbarItem>
</Tabbar>
```

# 钩子

### App.vue
``` html
<Tabbar @change="onTabbarChange">
      <TabbarItem to="/" name="index">
      ...
```
``` javascript
...
  methods: {
    onTabbarChange(e) {
      console.log(e)
    }
  },
...
```
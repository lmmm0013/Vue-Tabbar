<template>
  <div class="__Tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar',
    data() {
      return {
        currentName: ''
      }
    },
    mounted() {
      this.currentName = this.$children[0].name
    },
    methods: {
      onChange(item) {
        this.currentName = item.name
        this.$emit('change', item)
      }
    }
  }
</script>
<style>
.__Tabbar { display: flex; height: 49px; border-top: 1px solid #F2F2F2; background: #FFFFFF; position: fixed; right: 0; bottom: 0; left: 0;}
.__TabbarItem { display: flex; flex: 1; align-items: center; justify-content: center;}
.__TabbarIcon { text-align: center; margin: 2px 0;}
.__TabbarIcon img { width: 20px; height: 20px; vertical-align: top;}
.__TabbarText { color: #808080; font-size: 12px;}
.__TabbarItemActive .__TabbarText { color: #EA612D;}
</style>

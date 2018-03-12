<template>
  <div class="__TabbarItem" :class="{'__TabbarItemActive': isActive}" @click="linkTo">
    <div>
      <div v-if="$slots.icon" v-show="!isActive" class="__TabbarIcon"><slot name="icon"></slot></div>
      <div v-if="$slots.iconActive" v-show="isActive" class="__TabbarIcon"><slot name="iconActive"></slot></div>
      
      <div class="__TabbarText"><slot></slot></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabbarItem',
    props: {
      name: String,
      to: String,
    },
    data() {
      return {
        isActive: false,
      }
    },
    mounted() {
      this.isActive = this.$parent.currentName == this.name ? true : false
    },
    methods: {
      linkTo() {
        this.$parent.onChange({
          name: this.name,
          to: this.to,
        })
        this.$router.push({
          path: this.to
        })
      }
    },
    watch: {
      '$parent.currentName'() {
        this.isActive = this.$parent.currentName == this.name ? true : false
      }
    }
  }
</script>
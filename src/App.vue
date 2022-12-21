<template>
  <div>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>

</style>




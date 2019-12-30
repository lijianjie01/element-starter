<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <div>
<!--      <Navi />-->
      <router-view></router-view>
<!--      <el-button @click="startHacking">Start</el-button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{
    // 'Navi' : () => import('./components/Navi/Navi')
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>

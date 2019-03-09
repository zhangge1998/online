<template>
  <div>
    未登录
    <router-link to="/login" tag="button">去登录</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "UnLogin"
    }
</script>

<style scoped>

</style>

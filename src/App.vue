<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<script>
  // import Home from '@/views/Home.vue'
export default {
  name: 'App',

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #f7f7f7;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>

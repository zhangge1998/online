<template>
  <div>
    <IHeader1></IHeader1>
    <div class="login">
      <h1>This is a login page</h1>
      <LogBox></LogBox>
    </div>
  </div>

</template>

<script>
  import IHeader1 from '@/components/iheader1.vue'
  import LogBox from '@/components/logBox.vue'
    export default {
        name: "login",
        components: {
          IHeader1: IHeader1,
          LogBox: LogBox
        }
    }
</script>

<style scoped>

</style>

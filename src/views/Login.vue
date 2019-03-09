<template>
  <div>
    <IHeader></IHeader>
    <div class="login">
      <h1>This is a login page</h1>
      <LogBox></LogBox>
    </div>
  </div>

</template>

<script>
  import IHeader from '@/components/iheader.vue'
  import LogBox from '@/components/logBox.vue'
    export default {
        name: "login",
        components: {
          IHeader: IHeader,
          LogBox: LogBox
        }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <IHeader1></IHeader1>
    <div class="register">
      <h1>This is a register page</h1>
      <RegBox></RegBox>
    </div>
  </div>

</template>

<script>
  import IHeader1 from '@/components/iheader1.vue'
    import RegBox from '@/components/regBox.vue'
    export default {
      name: "register",
      components:{
        IHeader1: IHeader1,
        RegBox: RegBox
      }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <IHeader></IHeader>
    <div class="register">
      <h1>This is a register page</h1>
      <RegBox></RegBox>
    </div>
  </div>

</template>

<script>
  import IHeader from '@/components/iheader.vue'
    import RegBox from '@/components/regBox.vue'
    export default {
      name: "register",
      components:{
        IHeader: IHeader,
        RegBox: RegBox
      }
    }
</script>

<style scoped>

</style>

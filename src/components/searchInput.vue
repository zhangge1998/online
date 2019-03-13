<template>
    <div>
      <input type="text" placeholder="搜索商家,美食..." class="searchInput">
    </div>
</template>

<script>
    export default {
        name: "searchInput"
    }
</script>

<style scoped>
  .searchInput{
    width:200px;
    height: 30px;
    font-size: 16px;
    position: absolute;
    right: 40px;
    top:100px;
  }
</style>

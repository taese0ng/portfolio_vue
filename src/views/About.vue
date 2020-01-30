<template>
  <div class="about">
    <h1>김태성의 포트폴리오입니다.</h1>
    <h2>This page was created with vue.js</h2>
    <h2>with github pages</h2>
    <img src="@/assets/icons/github_icon.png">
    <img src="@/assets/icons/vuejs_icon.png">
  </div>
</template>

<script>

</script>

<style scoped>
img{
  margin: 30px;
  width: 120px;
  height: 120px;
}
@media(max-width:500px){
  h1{
    font-size: 25px;
  }
  h2{
    font-size: 20px;
  }
  img{
    margin: 20px;
    width: 100px;
    height: 100px;
  }
}
</style>
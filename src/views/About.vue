<template>
  <div class="about">
    <div id="nowPage">- About -</div>
    <h1>김태성의 포트폴리오입니다.</h1>
    <br>
    <h2>This page was created with vue.js</h2>
    <h2>with github pages</h2>
    <div class="image">
      <img src="@/assets/icons/github.png">
      <img src="@/assets/icons/Vue.png">
      <img src="@/assets/icons/portfolio.png">
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.image{
  margin-top: 40px;
}
img{
  margin: 30px;
  width: 120px;
  height: 120px;
}
@media(max-width:500px){
  .image{
    margin-top: 10px;
  }
  .about{
    margin-right: 20px;
    margin-left: 20px;
  }
  h1{
    font-size: 6.5vw;
  }
  h2{
    font-size: 5vw;
  }
  img{
    margin: 10px;
    margin-top: 40px;
    width: 22vw;
    height: 22vw;
  }
}
</style>
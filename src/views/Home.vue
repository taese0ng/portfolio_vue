<template>
  <div class="home">
    <Profile/>
    <HelloPortfolio msg="taese0ng의 포트폴리오입니다."/>
  </div>
</template>

<script>
import Profile from '@/components/ProfileCard.vue'
import HelloPortfolio from '@/components/HelloPortfolio.vue'

export default {
  name: 'home',
  components: {
    HelloPortfolio,
    Profile,
  }
}
</script>

<style>
  .home{
    margin-top: 20px;
  }
</style>
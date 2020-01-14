<template>
  <div class="home">
    <Profile/>
    <HelloWorld msg="Welcome to taese0ng's PortFolio"/>
  </div>
</template>

<script>
import Profile from '@/components/ProfileCard.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Profile,
  }
}
</script>

<style>
  .home{
    margin-top: 20px;
  }
</style>
<template>
  <div id="app">
    <Head class="bar_head"/>
    <Profile class="profileCard"/>
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Profile from '@/components/ProfileCard.vue'
import Head from '@/components/Head'   
export default {
    components:{ 
      Head,
      Profile,
      Menu,
    }
}
</script>

<style>
*{
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 44px;
}


.bar_head{
  position:fixed;
  top: 0;
  height: 27px;
  display:flex;
  background-color: rgb(54,54,54);
  color: rgb(255,255,255);
  font-size: 20px;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight:500;
  width: 100%;
}

.profileImg{
  min-width: 120px;
  width: 13vw;
  max-width: 160px;
  height: 13vw;
  min-height: 120px;
  max-height: 160px;
  border: 2px solid rgb(54,54,54);
  border-radius: 100px;
  -moz-border-radius: 100px;
  -khtml-border-radius: 100px;
  -webkit-border-radius: 100px;
}

.profileCard{
  padding-top: 80px;
}

.router-link{
  cursor: pointer;
  color: black;
  text-decoration: none;
}

.menu .router-link-exact-active{
  color: rgb(255, 255, 255);
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 22px;
}
@media(max-width:750px){
  .profileCard{
    padding-top: 40px;
  }
  .menu .router-link-exact-active{
    font-size: 6vw;
  }
}
</style>

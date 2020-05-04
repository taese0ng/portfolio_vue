<template>
  <div id="app">
    <Head class="bar_head"/>
    <transition name="drop-down">
      <Menu v-show="getMenuOpen"></Menu>
    </transition>
    <transition name="fade">
      <div v-show="getMenuOpen" @click="menuClose" id="background"></div>
    </transition>
    <Profile class="profileCard"/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Profile from '@/components/ProfileCard.vue'
import Head from '@/components/Head'   
import Menu from '@/components/Menu'
import {mapGetters, mapMutations} from'vuex'
export default {
    components:{ 
      Head,
      Profile,
      Menu,
    },
    computed:{
      ...mapGetters(['getMenuOpen','getPage'])
    },
    methods:{
      ...mapMutations(['turnMenu']),
      menuClose(){
        if(this.getMenuOpen==true) this.turnMenu()
      }
    }
}
</script>

<style>
*{
  margin: 0;
}

@font-face 
{
    font-family: NanumSquareRound;
    src: url('./assets/fonts/NanumSquareRoundR.ttf');
}

#app {
  font-family: NanumSquareRound;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 45px;
}

.drop-down-enter-active {
  animation: drop-down 0.4s;
}

.drop-down-leave-active {
  animation: drop-down 0.4s reverse;
}

@keyframes drop-down {
  from {
    transform: translate(0, 0, 0);
    height: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

#background{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.342);
  z-index: 998 !important;
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
  padding-top: 9px;
  padding-bottom: 9px;
  font-weight:500;
  width: 100%;
  z-index: 1000;
}

.profileImg{
  width: 150px;
  height: 150px;
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

#nowPage{
  font-weight: bold;
  font-size: 32px;
  margin-top: 60px;
  margin-bottom: 80px;
}
@media(max-width:500px){
  .profileImg{
    width: 120px;
    height: 120px;
  }
  .profileCard{
    padding-top: 40px;
    margin-bottom: 20px;
  }
  #nowPage{
    font-size: 6.5vw;
    margin-top: 35px;
    margin-bottom: 40px;
  }
}
</style>

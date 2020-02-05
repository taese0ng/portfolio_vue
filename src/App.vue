<template>
  <div id="app">
    <Menu v-show="getMenuOpen"></Menu>
    <Head class="bar_head"/>
    <div v-show="getMenuOpen" @click="menuClose" id="background"></div>
    <Profile class="profileCard"/>
    <div id="nowPage">- {{getPage}} -</div>
    <router-view/>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 44px;
}

#background{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.342);
  z-index: 998;
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
  z-index: 1000;
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

#nowPage{
  font-weight: bold;
  font-size: 28px;
  margin-top: 30px;
  margin-bottom: 40px;
}
@media(max-width:500px){
  .profileCard{
    padding-top: 40px;
    margin-bottom: 20px;
  }
  #nowPage{
    font-size: 7vw;
    margin-top: 20px;
    margin-bottom: 30px;
  }
}
</style>

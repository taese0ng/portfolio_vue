<template>
    <div class="menu">
        <li v-for="menu in getMenu" :key="menu.id"  @click="menuClick(menu.name)">
        <router-link 
         :to="menu.to" class="router-link" 
        >
        {{menu.name}}
        </router-link>
        </li>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
    export default {
        computed:{
            ...mapGetters(['getMenu'])
        },
        methods: {
            ...mapMutations(['turnMenu', 'changePage']),
            menuClick(name){
                this.turnMenu();
                this.changePage(name);
            }
        },
    }
</script>

<style scoped>
.menu{
    position: fixed;
    background: rgba(238, 236, 236, 0.877);
    text-align: left;
    z-index: 999;
    overflow: auto;
}
li{
    cursor: pointer;
    list-style: none;
    font-weight: 500;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.menu .router-link-exact-active{
  color: rgb(255, 255, 255);
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  font-size: 24px;
}
@media(min-width:500px){
    .menu{
        height: auto;
        width: 200px;
        height: 100%;
    }
    li{
        padding-left: 30px;
    }
}
@media(max-width:500px){
    .menu{
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: 15px;
    }
    li{
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 7vw;
        font-weight: bold;
    }
    .menu .router-link-exact-active{
        font-size: 7.8vw;
    }
}
</style>
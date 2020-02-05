<template>
    <div>
        <span id="menu" @click="turnMenu">
            Menu
            <span v-show="getMenuOpen==false"><i class="fas fa-caret-right" ></i></span>
            <span v-show="getMenuOpen"><i class="fas fa-caret-left" ></i></span>
        </span>
        <span @click="goHome('Home')">
            <router-link to="/" id="title">portFolio</router-link>
        </span>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data: function() {
        return {
            options: [{
                label: 'Coffee',
                value : 1
            },{
                label: 'Energy Drink',
                value: 2
            }]
        };
    },
    computed:{
        ...mapGetters(['getMenuOpen'])
    },
    methods: {
        ...mapMutations(['turnMenu', 'changePage']),
        goHome(name){
            this.turnMenu();
            this.changePage(name);
        }
    },
}
</script>

<style scoped>
#title{
    text-decoration: none;
    color: rgb(255,255,255);
    margin-right: 10px;
}
#menu{
    margin-left: 10px;
    cursor: pointer;
    color: rgb(255,255,255);
    font-weight: 500;
    font-size: 20px;
}
</style>
<template>
    <div>
        Menu
        
        <i class="fas fa-sort-up" v-show="getMenuOpen"></i>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        computed:{
            ...mapGetters(['getMenuOpen'])
        }
    }
</script>

<style scoped>

</style>
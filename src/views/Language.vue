<template>
    <div>
        <table class="languages">
            <td class="item" v-for="language in getLanguage" :key="language.id">
                <div class="languageImg">
                    <img :src='language.image'>
                </div>
            </td>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters(['getLanguage', 'getPrize'])
    },
}
</script>

<style scoped>
.item{
    display: inline-block;
    margin: 20px;
}
.languages{
    margin: auto;
}
.languageImg{
    width: 120px;
    height: 120px;
}
.languageImg img{
    height: 100%;
}
@media(max-width:500px){
    .languageImg{
        width: 90px;
        height: 90px;
    }
}
</style>
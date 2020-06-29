<template>
    <div>
        <div id="nowPage">- Skill -</div>
        <table class="languages">
            <td class="item" v-for="language in getLanguage" :key="language.id">
                <div class="languageImg">
                    <img :src='language.image'>
                </div>
                <span id="language-name" data-val='100%'>{{language.name}}</span>
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
    mounted: function(){
        //https://www.youtube.com/watch?v=ChNezX5NBx4
        this.$d3.selectAll('#language-name')
        .datum(function(){return this.dataset;})
        .style("width", "40%")
        .transition().duration(800)
        .style("width", d=>d.val)
    }
}
</script>

<style scoped>
#language-name{
    display: block;
    margin: 10px 0;
    color:black;
    font-size:20px;
    line-height: 1.8em;
    text-align: center;
    border-radius: 15px;
    background: rgba(206, 203, 203, 0.301);
} 

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
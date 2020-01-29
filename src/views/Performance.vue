<template>
    <div>
        <modal v-if="!isMobile()" name="prize" width="35%" height="auto" @before-open="beforeOpen" :scrollable="true">
            <img id="modalImg" :src='image'>
        </modal>
        <modal v-else name="prize" width="85%" height="auto" @before-open="beforeOpen" :scrollable="true">
            <img id="modalImg" :src='image'>
        </modal>
        <table class="prize">
            <td @click="modal_show(prize.image)" class="item" v-for="prize in getPrize" :key="prize.id">
                <div class="prizeImg">
                    <img class="img" :src="prize.image">
                </div>
                <li>{{ prize.name }}</li>
            </td>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data: function() {
        return {
            image: "",
        };
    },
    computed:{
        ...mapGetters(['getPrize'])
    },
    methods:{
        modal_show(item){
            this.$modal.show('prize', {foo:item});
        },
        modal_hide(){
            this.$modal.hide('prize');
        },
        beforeOpen(event){
            this.image = event.params.foo;
        },
        isMobile() {
            if( screen.width <= 760 ) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
</script>

<style scoped>
#closeBtn{
    position: absolute;
    right: 3%;
    cursor: pointer;
    font-size: 35px;
    color: black;
}

#modalImg{
    width: 100%;
}
li{
    margin-top: 20px;
    font-weight: bold;
    list-style: none;
    font-size: 20px;
    color: black;
}
.prizeImg{
    width: 20vw;
    height: 20vw;
    max-width: 400px;
    max-height: 400px;
    min-width: 250px;
    min-height: 250px;
}

.prizeImg img{
    height: 100%;
}

.item{
    display: inline-block;
    margin: 20px;
    cursor: pointer;
}
.prize{
    margin: auto;
}
@media(max-width:750px){
    #closeBtn{
        font-size: 35px;
    }
    li{
        font-size: 6vw;
    }
}
</style>
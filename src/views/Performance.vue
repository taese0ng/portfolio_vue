<template>
    <div>
        <div v-for="prize in getPrize" :key="prize.id">
            <img class="prizeImg" :src="prize.image">
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data: function() {
        return {
            Prize: this.$store.state.test
        };
    },
    computed:{
        ...mapGetters(['getPrize'])
    },
}
</script>

<style scoped>
.prizeImg{
    width: 13vw;
    height: 13vw;
}
</style>
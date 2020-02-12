<template>
    <div>
        <div id="nowPage">- School Activities -</div>
        <h1>학교 활동 제작중입니다.</h1>
        <Timeline
        class="tiemline"
        :timeline-items="getSchoolActivities"
        :message-when-no-items="messageWhenNoItems"
        :unique-year="true"
        :unique-timeline="true"
        colorDots="#2da1bf"
        order="asc"/>
    </div>
</template>

<script>
// https://github.com/pablosirera/timeline-vuejs
import Timeline from 'timeline-vuejs'
import { mapGetters } from 'vuex'
export default {
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'There are not items',
    
  }),
  computed:{
        ...mapGetters(['getSchoolActivities'])
    },
}
</script>

<style scoped>
    .timeline{
        margin: auto;
    }
</style>
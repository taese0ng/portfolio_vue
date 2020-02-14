<template>
    <div>
        <div id="nowPage">- School Activities -</div>
        <Timeline
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
    section.timeline{
      margin: auto;
      margin-bottom: 100px;
    }
    
    @media(max-width:500px){
      section.timeline{
        transform: translateX(-5%);
        margin-bottom: 40px;
      }
    }
</style>
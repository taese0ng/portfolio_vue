<template>
  <div class="hello">
      <li v-for="link in getLink" :key="link.id">
          <i id="icon" :class="link.icon"></i>
          <span id="line">
            <a :href="link.href" :target="link.target" :rel="link.rel">{{ link.name }}</a>
          </span>
      </li>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  computed:{
    ...mapGetters(['getLink'])
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
}

a {
  display:table-cell;
  vertical-align: middle;
  color: black;
  text-decoration: none;
  border-bottom: 2px solid black;
  padding-bottom: 1px;
  font-weight: bold;
  font-size: 18px;
}

li{
  margin-bottom: 25px;
  list-style: none;
}

#icon{
  font-size: 35px;
  width: 70px;
}
#line{
  display: inline-block;
  margin-left: 20px;
}
@media(max-width: 500px){
  .hello{
    position: absolute;
    left: 40%;
    transform: translateX(-25%);
    text-align: left;
  }
  #icon{
    font-size: 7vw;
    width: 23px;
  }
  a {
    margin-left: 13px;
    font-size: 4.5vw;
  }
  li{
    margin-bottom: 30px;
  }
}
</style>

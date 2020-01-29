<template>
  <div class="hello">
      <li>
          <i id="icon" class="fas fa-university"></i>
          <a href="http://kumoh.ac.kr/ko/index.do" target="_blank" rel="noopener">금오공과대학교 (KIT)</a>
      </li>
      <li>
          <i id="icon" class="fas fa-book"></i>
          <a href="http://ce.kumoh.ac.kr/ce/index.do" target="_blank" rel="noopener">컴퓨터공학과 (CE)</a>
      </li>
      <li>
          <i id="icon" class="fas fa-envelope"></i>
          <a href="mailto:taese0ng@naver.com" rel="noopener">taese0ng@naver.com</a>
      </li>
      <li>
          <i id="icon" class="fab fa-github"></i>
          <a href="https://github.com/taese0ng?tab=repositories" target="_blank" rel="noopener">taese0ng</a>
      </li>
      <li>
          <i id="icon" class="fab fa-instagram"></i>
          <a href="https://www.instagram.com/taese0_0ng/" target="_blank" rel="noopener">#taese0_0ng</a>
      </li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  margin-left: 20px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
}
li{
  margin-bottom: 20px;
  list-style: none;
}

#icon{
  font-size: 35px;
}
@media(min-width:750px){
  .hello{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      text-align: left;
    }
}
@media(max-width: 750px){
  .hello{
    margin-left: 15vw;
    text-align: left;
  }
  #icon{
    font-size: 7vw;
  }
  a {
    margin-left: 13px;
    font-size: 5vw;
  }
  li{
    margin-bottom: 30px;
  }
}
</style>

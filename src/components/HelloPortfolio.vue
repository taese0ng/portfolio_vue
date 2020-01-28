<template>
  <div class="hello">
    <h4>
      <vue-fontawesome icon="graduation-cap" size="1.8"></vue-fontawesome> 
      <a href="http://kumoh.ac.kr/ko/index.do" target="_blank" rel="noopener"> 금오공과대학교(Kumoh National Institute of Technology)</a>
      <br/>
      <vue-fontawesome icon="book" size="1.8"></vue-fontawesome>
      <a href="http://ce.kumoh.ac.kr/ce/index.do" target="_blank" rel="noopener"> 컴퓨터공학과</a>
    </h4>
    <h4>
      <vue-fontawesome icon="envelope" size="1.5"></vue-fontawesome> 
      <a href="mailto:taese0ng@naver.com" rel="noopener"> taese0ng@naver.com</a>
    </h4>
    <h4>
      <vue-fontawesome icon="github" size="1.8"></vue-fontawesome> 
      <a href="https://github.com/taese0ng?tab=repositories" target="_blank" rel="noopener"> taese0ng</a>
    </h4>
    <h4>
      <vue-fontawesome icon="instagram" size="1.8"></vue-fontawesome>
      <a href="https://www.instagram.com/taese0_0ng/" target="_blank" rel="noopener"> @taese0_0ng</a>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      소속 : 
      <a href="http://kumoh.ac.kr/ko/index.do" target="_blank" rel="noopener">금오공과대학교(Kumoh National Institute of Technology)</a>
      <br/>
      학과 : 
      <a href="http://ce.kumoh.ac.kr/ce/index.do" target="_blank" rel="noopener">컴퓨터공학과</a>
    </p>
    <h3>My Pages</h3>
    <ul>
      <li><a href="https://github.com/taese0ng?tab=repositories" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="http://git.kumoh.ac.kr/taese0ng/osp19-siserie.git" target="_blank" rel="noopener">GitLab-Opensource</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
}
</style>

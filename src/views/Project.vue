<template>
    <div>
        <div id="nowPage">- Project -</div>
        <ul>
            <li v-for="project in getProject" :key="project.id" 
                class="Close-project-list" :class="{'project-list':project.visible}">
                <img :src="project.mainImg" class="mainImg"/>
                <div id="content">
                    <ul>
                        <li class="contentLine"><h1>{{project.name}}</h1></li>
                        <li class="contentLine" v-for="content in project.content" :key="content.id">
                            {{content}}
                        </li>
                        <li class="contentLine Btns">
                            <a class="btn" :href="project.src" target="_blank">페이지 가기</a>
                        </li>
                        <li class="contentLine Btns">
                            <span class="btn" @click="clickd(project.id)">
                                <span v-if="!project.isOpen">펼치기</span>
                                <span v-else>닫기</span>
                            </span>
                        </li>
                        <li class="contentLine Btns">
                            <a class="btn" :href="project.git" target="_blank">
                                <img style="position: relative; top:3px;" width="25px" src="@/assets/icons/github.png"> Git
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="projectImgsBG">
                    <div id="projectImgs">
                        <img class="projectImg" :class="{'OpenProjectImgsBG':project.isOpen}" v-for="image in project.img" :key="image.id" 
                            :src="image" :alt="image.alt"/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed:{
        ...mapGetters(['getProject'])
    },
    data(){
        return{
            
        }
    },
    methods:{
        ...mapMutations(['setProjectImgOpen']),
        clickd(id){
            this.setProjectImgOpen(id);
        }
    }
}
</script>

<style scoped>
.Close-project-list *{
    max-height: 0;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
}
.project-list *{
    max-height: 1000px;
    visibility: visible;
    opacity: 1;
    -webkit-transition: 1.5s;
    -o-transition: 1.5s;
    transition: 1.5s;
}
.project-list{
    padding-bottom: 50px;
}

ul{
    padding: 0;
}
li{
    list-style: none;
    margin: 0;
}
.projectImgsBG{
    background-color: rgb(226, 225, 225);
    box-shadow:4px 4px 5px rgb(158, 158, 158) inset;
}

#projectImgs{
    display: flex;
    flex-direction: row;
    overflow: auto;
    margin: auto;
    width: 80%;
}
.projectImg{
    max-height: 0;
    padding-left: 12px;
    padding-right: 12px;
    -webkit-transition: max-height .5s;
    -o-transition: max-height .5s;
    transition: max-height .5s, padding .5s;
}
.OpenProjectImgsBG{
    max-height: 530px;
    padding: 12px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.mainImg{
    border-radius: 50px;
    width: 250px;
}
#content{
    display: inline-block;
    vertical-align: top;
    text-align: left;
    margin-left: 30px;
    min-width: 410px;
}
.contentLine{
    margin: 10px;

}
.btn{
    text-decoration: none;
    color: white;
    padding: 7px;
    background: rgb(54,54,54);
    border-radius: 5px;
    font-size: 25px;
    font-weight: bold;
    border-inline: 0;
    border: 0;
    cursor: pointer;
}
.Btns{
    display: inline-block;
}
@media(max-width:500px){
  .mainImg{
      width: 200px;
  }
  #content{
      min-width: 350px;
      max-width: 350px;
  }
}
</style>
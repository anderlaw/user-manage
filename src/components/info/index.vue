<template>
  <div>
    <div style="text-align:center;">
      <h1 >{{ title }}</h1>
      <div>
        <span style="color:#ccc;">{{ author }}</span>
        <span style="color:blue;">{{ create_date }}</span>
      </div>
    </div>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import {articleInfo} from '@/http/article.js'
export default {
  data(){
    return {
      title:'',
      content:'',
      create_date:'',
      author:''
    }
  },
  mounted(){
    articleInfo({article_id:this.$route.query.article_id}).then(res=>{
      if(res.data.statusCode === 200){
        this.title = res.data.data[0].title;
        this.content = res.data.data[0].content;
        this.create_date = res.data.data[0].create_date;
        this.author = res.data.data[0].author;
      }
    })
  }
}
</script>

<style>

</style>

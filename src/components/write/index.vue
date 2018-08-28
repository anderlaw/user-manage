<template>
  <el-row>
    <el-col :span="3">
      <TabBox>
        <template slot="title">
          <span style="color:#fff;">选项</span>
        </template>
        <template slot="content" style="height:500px;">
          <div @click="currentTag = '写文章'" :class="{ 'tab-item':true,active:currentTag === '写文章' }">写文章</div>
          <div @click="currentTag = '文章管理'" :class="{ 'tab-item':true,active:currentTag === '文章管理' }">文章管理</div>
          <div @click="currentTag = '评论管理'" :class="{ 'tab-item':true,active:currentTag === '评论管理' }">评论管理</div>
        </template>
      </TabBox>
    </el-col>
    <el-col :span="21" style="box-sizing:border-box;padding:10px;">
      <el-input v-model="articleTitle" placeholder="文章标题"/>
      <div style="margin:10px;"></div>
      <el-input
      type="textarea"
      :autosize="{ minRows: 10}"
      placeholder="文章内容"
      v-model="articleContent"/>
      <el-button @click="publish">发表</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { createArticle } from '@/http/article.js'
import TabBox from '@/components/tab-box'
export default {
  components:{TabBox},
  data(){
    return {
      currentTag:'写文章',
      articleTitle:'',
      articleContent:''
    }
  },
  methods:{
    publish(){
      createArticle({
        title:this.articleTitle,
        content:this.articleContent,
        create_date : new Date().toLocaleDateString(),
        author:'hajerbin'
      }).then(res=>{
        if(res.data.statusCode === 200){
          this.$notify({
            message: '成功发表！',
            offset: 50,
            type: 'success'
          });
        }else{
          this.$notify({
            message: '发表失败！',
            offset: 50,
            type: 'error'
          });
        }

      })
    }
  }
}
</script>

<style scoped>
  .tab-item{
    line-height: 40px;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
  }
  .tab-item:hover,.tab-item.active{
    background-color: #ccc;
  }
</style>

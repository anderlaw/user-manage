<template>
  <div class="login_bg">
    <div style="text-align:center;opacity:.8;">
      <el-form size="small" style="width:500px;display:inline-block;" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item style="text-align:left;">
          <el-button size="small" type="primary" @click="login">登 录</el-button>
          <el-button size="small" type="danger" @click="reset">清 空</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      form:{
        name:'',
        password:''
      }
    }
  },
  methods:{
    reset(){
      this.form = {
        name:'',
        password:''
      }
    },
    login(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
.login_bg{
  padding-top:200px;
  box-sizing: border-box;
  height: 100%;
  background: url(../../assets/login_bg.jpg) no-repeat center / 100% 100%;
}
</style>

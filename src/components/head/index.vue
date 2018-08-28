<template>
    <div style="height:50px;line-height:50px;background-color:#e4e7ed;">
        <span style="padding:0 20px;font-size:18px;font-weight:bold;cursor:pointer;" @click="jumpto('/')">真知管理系统</span>
        <span style="float:right;margin-right:20px;">
            <img src="" alt="">
            <span style="color:#4a5f75;margin-right:10px;">hajerbin</span>
            <span style="color:#4a5f75;margin-right:10px;">管理员</span>
            <span @click="logout" class="iconfont icon-logout" style="font-size:20px;cursor:pointer;"></span>
        </span>
    </div>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$notify({
                message: '成功登出！',
                offset: 50,
                type: 'success'
            });
        },
        jumpto(path){
          this.$router.push(path)
        }
    }
}
</script>

<style>

</style>

<template>
    <div class="love" style="height:100%;">
        <!-- 头部 -->
        <Head/>
        <router-view></router-view>
        <!-- 尾部 -->
        <Footer/>
    </div>
    
</template>

<script>
import Head from '@/components/head'
import Footer from '@/components/foot'
export default {
    components:{Head,Footer}
}
</script>

<style>

</style>

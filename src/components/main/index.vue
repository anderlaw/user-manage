<template>
    <div style="height:100%;">
        <!-- 头部 -->
        <Head/>
        <router-view style="height:calc(100% - 90px);box-sizing:border-box;padding:10px;over-flow:auto;"></router-view>
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

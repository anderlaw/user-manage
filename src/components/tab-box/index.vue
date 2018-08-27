<template>
    <div class="tab">
        <div class="title">
            <slot name="title">

            </slot>
        </div>
        <div class="content">
            <slot name="content">

            </slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .tab .title{
        background-color: rgb(38, 178, 221);
        padding-left: 10px;
        line-height: 30px;
    }
    .tab .content{
        border:1px solid #ccc;
        border-top: none;
    }
</style>

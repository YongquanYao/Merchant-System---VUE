<template>
<a-layout-footer>
    <div>
        {{msg}}
    </div>
</a-layout-footer>
</template>

<script>
    export default {
        data(){
            return{
                msg: 'Merchant System ©2020 Created by Raymond Yao'
            }
        }
    }
</script>

<style lang="css" scoped>

    div{
        text-align: center;
    }
</style>


<template>
    <a-layout-content>
        <div class="content">
        <a-card style="height: 300px">
            <a-empty />
        </a-card>
        </div>
    </a-layout-content>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        mounted(){

        },
        created(){
        }
    }
</script>

<style scoped>
.ant-layout-content{
  padding: 0 40px;
  flex: 1;
  background-color: #f0f2f5;
  }
   .content{
    margin-top:40px;
    background-color: #fff;
    box-shadow: 0px 1px 10px 5px rgba(17,17,17,0.1);
  }
</style>
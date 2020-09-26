<template>
    <a-layout-content>
        <div class="content">
        <a-card style="height: 300px">
            <a-input class="search_username" v-model="username" placeholder="请输入需要搜索的人名" />
            <a-button @click="handleSearch">Search</a-button>
        </a-card>
        </div>
    </a-layout-content>
</template>

<script>
    import {getGithubUser} from '../../service/github'
    export default {
        data(){
            return{
                username: '',
            }
        },
        mounted(){

        },
        created(){

        },
        methods: {
            handleSearch() {
                getGithubUser(this.username).then(res => {
                    console.log(res)
                })
            }
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
    box-shadow: 0px 1px 10px 1px rgba(17,17,17,0.1);
}
.search_username{
    width: 230px;     
}
</style>
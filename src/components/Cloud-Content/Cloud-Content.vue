<template>
    <a-layout-content>
        <div class="content">
        <a-card style="height: 300px">
            <div class="search_contain">
                <a-input class="search_username" v-model="username" placeholder="请输入需要搜索的人名" />
                 <a-button type="primary" class="search_bottom" @click="handleSearch">Search</a-button>
            </div>
            <div class="github_list">
                <a-list :data-source="list">
                    <a-list-item slot="renderItem" slot-scope="item">
                        <a-list-item-meta>
                            <span slot="description">
                             Status: {{item.type}} / Public Repo: {{item.public_repos}} / Follower:  {{item.followers}} / Location: {{item.location}}
                            </span>
                        <a slot="title" :href="item.html_url">{{ item.login }}</a>
                        <a-avatar
                            slot="avatar"
                            :src="item.avatar_url"
                            style="avatar"
                        />
                       
                        </a-list-item-meta>
                        <div><a href="#javascript:;" @click="handleJumpRepo(item.html_url)">Link</a></div>
                    </a-list-item>
                </a-list>
            </div>
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
                list:[]
            }
        },
        mounted(){

        },
        created(){

        },
        methods: {
            handleSearch() {
                getGithubUser(this.username).then(res => {
                    this.list.push(res.data)
                    console.log(this.list)
                })
            },
            handleJumpRepo(link){
                window.open(link)
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
    width: 220px; 
    height: 30px;
}
.search_contain{
    align-items: center;
}
.search_bottom{
    margin-left: 10px;
    /* padding: 1px; */
}
.github_list{
    margin-top: 20px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    overflow: auto;
    padding: 8px 24px;
  /* height: 300px; */
}
</style>
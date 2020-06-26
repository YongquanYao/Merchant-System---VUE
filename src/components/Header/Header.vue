<template>
<a-layout-header>
    <div class="header">
        <div class="logo">
            <router-link to='/home'>
                <a-spin size="default"/>
            </router-link>
        </div>
        <div class="left">
            <router-link to='/home/info'><h1>{{title}}</h1></router-link>
        </div>
        <div class="right">
            <span class="time">{{time}}</span>
            <router-link to='/home/info'><a-avatar style="backgroundColor:#1890ff">{{initial}}</a-avatar></router-link>
            <!-- <span class="username">{{username}}</span> -->
        </div>
    </div>
</a-layout-header>
    
</template>

<script>
import {formateDate} from "../../utils/dateUtils"

export default {
  name: 'Header',
  data(){
      return{
        title: 'Merchant System',
        username: '',
        time: formateDate(Date.now()),
        initial: ''
      }
  },
  mounted(){
      this.timer = setInterval(()=>{
          this.time = formateDate(Date.now())
      },1000)
  },
  created(){
      clearInterval(this.timer)
      this.username = localStorage.getItem('username')
      this.initial = localStorage.getItem('username').split('')[0]

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
   .ant-layout-header{
    padding: 0; 
    background:#fff;
  }
    .header{
        display: flex;
    }
    .logo{
        margin-left:45px;
        padding-right: 15px;
    }
    .left{
        position: relative;
        text-align: center;
    }
    .left::after{
                position: absolute;
                content: "";
                border-top: 40px solid #fff;
                border-bottom: 40px solid transparent;
                border-right: 40px solid transparent;
                border-left: 40px solid transparent;
                left: 50%;
                top:60px;
                transform: translateX(-50%);
    }
    .left h1{
        font-size:26px;
        font-weight: 500;
         color: #1890ff;
    }
    .right{
         flex: 1;
         text-align: right;
         align-items: center;
         margin-right: 40px;
    }
    .right .time{
        font-size: 14px;
        margin-right: 15px;
        font-weight: 500;
        /* color:#6db7fc; */
    }
    .right span{
        margin-left: 10px;
        font-size:18px;
    }
    .right .username{
         font-size:16px;
    }
</style>

<template>
<a-layout-header>
    <div class="header">
        <div class="logo">
            <router-link to='/home'>
            <a-spin size="large"/>
            </router-link>
        </div>
        <div class="left">
            <router-link to='/home'><h1>{{title}}</h1></router-link>
        </div>
        <div class="right">
            <span class="time">{{time}}</span>
            <router-link to='/home/info'><a-avatar style="backgroundColor:#1890ff" icon="user" /></router-link>
            <span>{{username}}</span>
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
        username: 'Raymond',
        time: formateDate(Date.now())
      }
  },
  mounted(){
      this.timer = setInterval(()=>{
          this.time = formateDate(Date.now())
      },1000)
  },
  created(){
      clearInterval(this.timer)
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
    }
    .left{
        width: 20%;
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
        font-size:30px;
        font-weight: 500;
         color: #1890ff;
    }
    .right{
         width: 75%;
         text-align: right;
         align-items: center;
         margin-right: 40px;
    }
    .right .time{
        font-size: 15px;
        margin-right: 15px;
        font-weight: 500;
        color:#6db7fc;
    }
    .right span{
        margin-left: 10px;
        font-size:18px;
    }
</style>

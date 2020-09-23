<template>
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" theme="dark">
        <div class="logo"  @click="()=> {collapsed = !collapsed, span =!span}" >
          <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
         
        /><span v-show="span">Main menu</span>    
      </div>
      <a-menu theme="light" mode="inline" :defaultSelectedKeys="[this.key]">
        <a-menu-item key="/home">
          <router-link to='/home'>
          <a-icon type="home"/>
          <span>Home</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/home/info">
          <router-link to='/home/info'>
          <a-icon type="user" />
            <span>User Interface</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/home/company">
          <router-link to='/home/company'>
            <a-icon type="shop"/>
            <span>Company</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/home/table">
          <router-link to='/home/table'>
            <a-icon type="table" />
            <span>Table</span>
              </router-link>
        </a-menu-item>
        <a-menu-item key="/home/analysis">
          <router-link to='/home/analysis'>
          <a-icon type="rise" />
            <span>Analysis</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="/home/cloud">
          <router-link to='/home/cloud'>
            <a-icon type="cloud" />
            <span>Cloud</span>
           </router-link>
        </a-menu-item>
        <a-menu-item key="/home/setting">
          <router-link to='/home/setting'>
            <a-icon type="setting"/>
            <span>Setting</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="8" @click="logout">
          <a-icon type="logout"/>
          <span>Logout</span>
        </a-menu-item>
      </a-menu>
     </a-layout-sider>
</template>

<script>
    export default {
    data(){
      return{
        collapsed: false,
        span: true,
        key: '/home',
      }
    },
    created(){
      this.key = this.$router.history.current.path
    },
    methods:{
      logout(){
        this.$confirm({
          title: 'Logout Notification',
          content: 'Are you sure to logout ?',
          okText: '确认',
          cancelText: '取消',
          onOk(){
              window.location.replace('/')  
              localStorage.removeItem('username');
          }
        });
      }
    }
  }
</script>

<style scoped>
.ant-layout-sider{
  background-color:#fff;
}
.ant-layout-sider .logo {
    height: 36px;
    font-size: 22px;
    display: flex;
    justify-content: center;
    margin: 15px 0;
    color: black;
  }
  
.ant-layout-sider .logo span{
   margin-left: 10px; 
  font-size: 18px;
   cursor: pointer;
   width: 100px;
}
.logo{
  cursor: pointer;
}
</style>



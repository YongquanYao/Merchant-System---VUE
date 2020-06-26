<template>
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" theme="dark">
        <div class="logo"  @click="()=> {collapsed = !collapsed, span =!span}" >
          <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
         
        /><span v-show="span">Main menu</span>    
      </div>
      <a-menu theme="light" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <router-link to='/home/info'>
          <a-icon type="home"/>
          <span>Home</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to='/home/info'>
          <a-icon type="user" />
            <span>User Interface</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to='/home/company'>
            <a-icon type="shop"/>
            <span>Company</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to='/home/table'>
            <a-icon type="table" />
            <span>Table</span>
              </router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="rise" />
          <span>Analysis</span>
        </a-menu-item>
        <a-menu-item key="6">
          <router-link to='/home/cloud'>
            <a-icon type="cloud" />
            <span>Cloud</span>
           </router-link>
        </a-menu-item>
        <a-menu-item key="7">
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
      }
    },
    methods:{
      logout(){
        this.$confirm({
          title: 'Are you sure to logout?',
          content: <div style="color: orange;">this is a confirmation</div>,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk(){
              window.location.replace('/')  
              localStorage.removeItem('username');
              //发送ajax请求

            //   return new Promise((resolve, reject) => {
            //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1000); 
            //   //跳转回主页
            // }).catch(() => window.console.log('Oops errors!'));
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
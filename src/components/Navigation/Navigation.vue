<template>
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" >
          <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> {collapsed = !collapsed, span =!span}"
        /><span v-show="span">Menu</span>    
      </div>
      <a-menu theme="light" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="home" />
          <span>Home</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="user" />
          <span>User Interface</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="wallet" />
          <span>Video</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="upload" />
          <span>Upload</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="rise" />
          <span>Analysis</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="cloud" />
          <span>Cloud</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="appstore" />
          <span>Application</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="logout" />
          <span>Logout</span>
        </a-menu-item>
      </a-menu>
     </a-layout-sider>
</template>

<script>
    export default {
    data(){
      return{
        collapsed: true,
        span: false,
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
    font-size: 28px;
    display: flex;
    justify-content: center;
    margin: 15px 0;
    color: gray;
  }
  
.ant-layout-sider .logo span{
  margin-left: 10px; 
  font-size: 20px;
}
</style>
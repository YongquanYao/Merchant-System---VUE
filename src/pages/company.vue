<template>
<!-- This is the CompanyInfopage -->
  <div id="home">
    <a-layout>
       <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" >
          <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> {collapsed = !collapsed, span =!span}"
        /> <span v-show="span">Menu</span>    
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
    <a-layout>
      <a-layout-header>
        <Header></Header>
        </a-layout-header>
      <a-layout-content>
        <CompanyContent></CompanyContent>
      </a-layout-content>
      <a-layout-footer>
          <Footer></Footer>
      </a-layout-footer>
    </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import CompanyContent from '../components/Company-Content/Company-Content'
import Footer from '../components/Footer/Footer'

export default {
  name: 'company',
  components: {
    Header,
    CompanyContent,
    Footer
  },
  data(){
    return{
      collapsed: true,
      span: false,
    }
  }
}
</script>

<style >
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction:column;
}
#home .ant-layout{
  background-color: rgba(192, 192, 192, 0.2)
}
#home .ant-layout-header{
  padding: 0; 
  background:#fff;
  
}
#home .ant-layout-content{
  padding: 0 40px;
  flex: 1;
  background-color: #f0f2f5;
}
#home .ant-layout-sider{
  background-color:#fff;
}
#home .ant-layout-sider .logo {
    height: 36px;
    font-size: 28px;
    display: flex;
    justify-content: center;
    margin: 15px 0;
    color: gray;
  }
  
#home .ant-layout-sider .logo span{
  margin-left: 10px; 
  font-size: 20px;
}
</style>

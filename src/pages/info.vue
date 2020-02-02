<template>
<!-- This is the Infopage -->
  <div id="home">
    <a-layout>
       <a-layout-sider/>
    <a-layout>
      <a-layout-header><Header></Header></a-layout-header>
      <a-layout-content>
        <InfoContent></InfoContent>
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
import InfoContent from '../components/Info-Content/Info-Content'
import Footer from '../components/Footer/Footer'

export default {
  name: 'home',
  components: {
    Header,
    InfoContent,
    Footer,
  },
}
</script>

<style>
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
</style>

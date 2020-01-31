<template>
<!-- This is the CompanyInfopage -->
  <div id="home">
    <a-layout>
      <a-layout-header><Header></Header></a-layout-header>
      <a-layout-content>
        <CompanyContent></CompanyContent>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import CompanyContent from '../components/Company-Content/Company-Content'

export default {
  name: 'company',
  components: {
    Header,
    CompanyContent,
  }
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
}



</style>

<template>
<!-- This is the CompanyInfopage -->
  <div id="layout">
     <a-layout>
          <Navigation></Navigation>
      <a-layout>
          <Header></Header>
          <CompanyContent></CompanyContent>
          <Footer></Footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import CompanyContent from '../components/Company-Content/Company-Content'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

export default {
  name: 'company',
  components: {
    Header,
    CompanyContent,
    Footer,
    Navigation,
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
#layout {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction:column;
}
#layout .ant-layout{
  background-color: rgba(192, 192, 192, 0.2)
}

</style>

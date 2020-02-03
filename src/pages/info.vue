<template>
<!-- This is the Infopage -->
  <div id="layout">
    <a-layout>
          <Navigation></Navigation>
      <a-layout>
          <Header></Header>
          <InfoContent></InfoContent>
          <Footer></Footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import InfoContent from '../components/Info-Content/Info-Content'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

export default {
  name: 'info',
  components: {
    Header,
    InfoContent,
    Footer,
    Navigation,
  },
  data(){
    return{
      collapsed: true,
    }
  }
}
</script>

<!--Genernal layout Setting for the /home/xxx page -->
<style>
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

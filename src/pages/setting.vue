<template>
     <div id="layout">
    <a-layout>
          <Navigation></Navigation>
      <a-layout>
          <Header></Header>
            <SettingContent></SettingContent>
          <Footer></Footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import SettingContent from '../components/Settting-Content/Setting-Content'

    export default {
        components:{
            Header,
            SettingContent,
            Footer,
            Navigation
        }
    }
</script>

<style  scoped>
    
</style>
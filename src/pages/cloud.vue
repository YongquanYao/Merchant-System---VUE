<template>
    <div id="layout">
    <a-layout>
          <Navigation></Navigation>
      <a-layout>
          <Header></Header>
          <CloudContent></CloudContent>
          <Footer></Footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
    import Header from '../components/Header/Header'
    import CloudContent from '../components/Cloud-Content/Cloud-Content'
    import Footer from '../components/Footer/Footer'
    import Navigation from '../components/Navigation/Navigation' 

    export default {
    components: {
        Header,
        CloudContent,
        Footer,
        Navigation,
  },
    }
</script>

<style scoped>

</style>
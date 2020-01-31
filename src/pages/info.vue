<template>
<!-- This is the Infopage -->
  <div id="home">
    <a-layout>
      <a-layout-header><Header></Header></a-layout-header>
      <a-layout-content>
        <InfoContent></InfoContent>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Header from '../components/Header/Header'
import InfoContent from '../components/Info-Content/Info-Content'

export default {
  name: 'home',
  components: {
    Header,
    InfoContent,
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

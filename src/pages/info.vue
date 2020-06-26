<template>
<!-- This is the Infopage -->
          <InfoContent></InfoContent>
</template>

<script>
import InfoContent from '../components/Info-Content/Info-Content'

export default {
  name: 'info',
  components: {
    InfoContent,
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

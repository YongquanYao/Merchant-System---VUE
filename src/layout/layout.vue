<template>
        <div id="layout">
                <a-layout>
                    <Navigation></Navigation>
                <a-layout>
                    <Header></Header>
                    <a-layout-content>
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </a-layout-content>
                    <Footer></Footer>
                </a-layout>
            </a-layout>
        </div>
</template>

<script>
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

export default {
    name: 'MainLayout',
    components: {
        Header,
        Footer,
        Navigation,
    },
      data(){
    return{
       location: ""
    }
  },
    created(){
        this.location = this.$router.history.current.path
        // eslint-disable-next-line no-console
        console.log(this.location)
    },
    computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
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
.ant-layout-content{
  padding: 0 40px;
  flex: 1;
  background-color: #f0f2f5;
}
</style>
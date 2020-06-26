<template>
<!-- This is the CompanyInfopage -->
   <CompanyContent></CompanyContent>
</template>

<script>
import CompanyContent from '../components/Company-Content/Company-Content'

export default {
  name: 'company',
  components: {
    CompanyContent,
  },
  data(){
    return{
      collapsed: true,
      span: false,
    }
  }
}
</script>

<style>
</style>

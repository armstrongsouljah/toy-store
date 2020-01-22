<template>
    <div class="container">
        <Navbar/>
        <img src="../assets/banner.jpg"/>
    </div>
</template>
<script>
import Navbar from './Navigation';
export default {
    name: 'LandingPage',
    components:{
        Navbar
    }
}
</script>
<style scoped>
  img{
      width:100vw;
  }
</style>
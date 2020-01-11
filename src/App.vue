<template>
 <div>
   <Navbar/>
   <LandingPage/>
 </div>
</template>

<script>
import LandingPage from './components/Welcome';
import Navbar from './components/Navigation';
export default {
  name: 'app',
  components: {
    LandingPage,
    Navbar
  }
}
</script>
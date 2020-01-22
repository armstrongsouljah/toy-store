<template>
    <div class="container">
        <Navbar/>
        <TabComponent :tabs="tabs"/>
        <template slot="tab-head-Login">
            <div class="login-wrapper">
                Login here
            </div>
        </template>
        <template slot="tab-head-Register">
            <div class="signup-wrapper">
                Signup here
            </div>
        </template>
    </div>
</template>
<script>
import Navbar from './Navigation';
import TabComponent from '../components/TabCard'
export default {
    name:'AuthPage',
    components:{
        Navbar,
        TabComponent
    },
    data(){
        return {
          tabs: [{name:'Login'}, {name:'Register'}]
        }
    }
}
</script>
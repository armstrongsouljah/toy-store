<template>
    <div>
        <nav>
            <ul class="menu">
                <li class="menu-item"><a href="#">Soultech Store</a></li>
                <li class="menu-item"><a href="#">Home</a></li>
                <li class="menu-item"><a href="#">New-Arrivals</a></li>
                <li class="menu-item dropdown">
                    <a href="#">Account</a>
                    <ul class="dropdown-content">
                        <li><a href="#" @click="launchLoginModal">Login</a></li>
                        <li> <a href="#" @click="launchSignupModal">Register</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    methods:{
        launchLoginModal () {
          alert('Login');
        },
        launchSignupModal () {
           alert('Register');
        }
    }
}
</script>
<style scoped>
ul{
    list-style-type: none;
    list-style: none;
    padding: 9px;
}
a{
    text-decoration: none;
    color:rgb(211, 210, 210);
}
a:hover{
    cursor: pointer;
}

 .menu{
     display: flex;
     flex-flow: row wrap;
     background: rgba(67, 34, 54, .8);
     padding:23px;
     margin:0;
 }
 .menu-item:first-child{
    flex:2;
}
.menu-item{
    margin-right: 9px;
}
.dropdown{
    position: relative;
}
.dropdown-content{
    position: absolute;
    display:flex;
    flex-flow: column;
    min-height: 7vh;
    padding: 5px;
    background: #f2f2;
}
</style>
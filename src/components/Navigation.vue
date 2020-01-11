<template>
    <div>
        <nav>
            <ul class="menu">
                <li class="menu-item"><a href="#">Soultech Store</a></li>
                <li class="menu-item"><a href="#">Home</a></li>
                <li class="menu-item"><a href="#">New-Arrivals</a></li>
                <li class="menu-item"><a href="#">Account</a></li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Navbar'
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
</style>
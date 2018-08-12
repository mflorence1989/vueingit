<template>
  <header>
  <div class="container">
    <nav>
        <!-- <router-link to="/"  active-class="active" exact><a>Home</a></router-link> -->
        <router-link to="/about"  active-class="active"><a>About</a></router-link>
        <router-link to="/portfolio"  active-class="active">Portfolio</router-link>
        <router-link to="/experience"  active-class="active"><a>Experience</a></router-link>
        <!-- <router-link to="/contact"  active-class="active"><a>Contact</a></router-link> -->
      </nav>
      </div>
  </header>
</template>
<style >
header{
  position: absolute;
  color:black;
  width:100%;
  padding: 20px;
  z-index: 20;
}
nav{
  display: inline-block;
  float: right;
  text-align: right;
  text-decoration: none;
}
a {
  display: inline-block;
  color: #202020;
  font-size: 1.2rem;
  text-decoration: none !important;
  padding: 0px 10px;
}

.logo{
    display: inline-block;
    color: white;
    font-size: 3rem;
    padding: 20px 10px;
}

</style>

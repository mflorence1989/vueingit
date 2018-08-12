<template>
<section id="TopImg">
<div class="container">
<div class="title">
<h5 class="back">
Web developer
</h5>
<h1 class="holla">
<strong>M</strong>ario Florence
</h1>
</div>

<div class="contact-info">
<div class="container">
<div class="booking">Philadelphia,Pa</div>
<h2 class="number">(267) - 982 - 3402</h2>

    </div>
    </div>
  </div>
</section>

</template>
<style >
@import url('https://fonts.googleapis.com/css?family=Dosis:400,700');
@import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed');
#TopImg{
  position: relative;
  min-height: 500px;
  height: 100vh;
  background: url("https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;

}
.title{
  padding: 200px 0 80px;
  text-align: right;
}
h1.holla{
  text-transform: uppercase;
  color: #202020;
  font-weight: 400;
  font-size: 9.3rem;
  font-family: 'Dosis', sans-serif;
}
strong{
  font-weight: 600;
  font-family: 'Dosis', sans-serif;
  color:white;
}
h5.back{
  text-transform: uppercase;
  color:black;
  font-weight: 300;
}

.booking{
  margin-bottom: 10px;
  color: #ADADAD;
}

h2.number{
  font-size: 2rem;
  margin-bottom: 20px;
  color: #202020;
}
.contact-info{
  width:100%;
  position: absolute;
  bottom: 50px;
  right: 0;
  text-align: right;
  color:#ADADAD;
  font-size: 1.5rem;
  line-height: 1.5rem;

}



</style>

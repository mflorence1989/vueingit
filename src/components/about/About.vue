<template>
  <div>
    <router-view></router-view>
  <section id="OurStory">
      <div class="container">
      <div class="row">
      <div class="col-md-6">
      <h5 class="abouting">About Me</h5>
      <h2>visions into visuals</h2>
      <p>Web developer who consistently demonstrates the ability to learn, adapt and create at a fast pace. Proficient working within MVC architectures, Restful API’s & Web-sockets . I have seven years experience troubleshooting and creating solutions for internal applications. Efficient in Mac, Windows and Linux environments. </p>
      <div class="quote">"I turn visions into visuals." -<strong> Mario Florence</strong></div>
      <a href="/contact" class="reserve-btn">Contact</a>
      </div>
      <div class="col-md-6">
        <!-- <button @click="navigateToHome" class="btn btn-primary">Go to Home</button> -->
      <div class="video-img">
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
</template>
<style media="screen">
#OurStory{
padding: 100px 0;
}

p{
  line-height: 2.2;
  font-size: .9rem;
  font-weight: 300;
}

.quote{
  color: #ADADAD;
  margin: .5rem 0 3rem;

}
strong{
  font-weight: 700;
  color: #202020;
}




.reserve-btn{
  -moz-box-shadow: 2px 4px 9px 2px #8a2a21;
  -webkit-box-shadow: 2px 4px 9px 2px #8a2a21;
  box-shadow: 2px 4px 9px 2px #8a2a21;
  background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #c62d1f), color-stop(1, #f24437));
  background:-moz-linear-gradient(top, #c62d1f 5%, #f24437 100%);
  background:-webkit-linear-gradient(top, #c62d1f 5%, #f24437 100%);
  background:-o-linear-gradient(top, #c62d1f 5%, #f24437 100%);
  background:-ms-linear-gradient(top, #c62d1f 5%, #f24437 100%);
  background:linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#c62d1f', endColorstr='#f24437',GradientType=0);
  background-color:#c62d1f;
  -moz-border-radius:18px;
  -webkit-border-radius:18px;
  border-radius:18px;
  border:1px solid #d02718;
  display:inline-block;
  cursor:pointer;
  color:white;
  font-family:'Ubuntu Condensed', sans-serif;
  font-size:17px;
  padding:11px 38px;
  text-decoration:none;
  text-shadow:0px 1px 0px #810e05;


}
&:hover{
  background: #911A20;
  color: white;
}
.video-img{
  max-width: 300px;
  height: 400px;
  background: url("https://s5.postimg.cc/cpbjhl96f/20171009_213933.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: right;
  margin: 0 auto;
}
h5.abouting{
margin-bottom: 35px;
font-size: 1rem;
}
</style>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>

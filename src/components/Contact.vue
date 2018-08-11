<template lang="html">
  <section id="ContactUs">
    <div class="container">
  <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
        <h2>Contact</h2>
      </div>
  </div>
  <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
          <form id="contact-form" class="form" action="{{url('contact')}}" method="POST" role="form">
    
              <div class="form-group">
                  <label class="form-label" for="name"></label>
                  <input type="text" class="form-control" id="name" name="name" placeholder="Your name" tabindex="1" required>
              </div>
              <div class="form-group">
                  <label class="form-label" for="email"></label>
                  <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" required>
              </div>
              <div class="form-group">
                  <label class="form-label" for="subject"></label>
                  <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3">
              </div>
              <div class="form-group">
                  <label class="form-label" for="message"></label>
                  <textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Message..." tabindex="4" required></textarea>
              </div>
              <div class="text-center">
                  <button type="submit" class="btn btn-start-order">Send Message</button>
              </div>
          </form>
      </div>
  </div>
</div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

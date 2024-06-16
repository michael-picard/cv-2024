<template>
  <section class="card">
      <div class="quick-pres-grid card__content">
        <div>
          <img
              src="https://placehold.co/250x300"
              alt=""
          >
          <div><h1>Michael Picard</h1></div>
          <div>Full stack web developer</div>
        </div>
        <div>
          <p>Hello, my friends and colleagues call me Mike. I am a French senior full stack developer with over 10 years of experience in the e-commerce industry. I obsess over web perfomance and thrive on constant learning. My skills and experience will help you solve problems and make more money.</p>
        </div>
      </div>
  </section>
</template>

<script
    setup
    lang="ts"
>

</script>

<style
    scoped
    lang=scss
>
.quick-pres-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-items: center;
  grid-gap: 2rem;
  //background-image: url("/endless-constellation.svg");
}
</style>

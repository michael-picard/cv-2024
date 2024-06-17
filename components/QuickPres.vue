<template>
  <section class="card">
    <div class="quick-pres__grid card__content">
      <div>
        <!--        <img-->
        <!--            src="https://placehold.co/250x300"-->
        <!--            alt=""-->
        <!--            width="250"-->
        <!--            height="300"-->
        <!--        >-->
<!--        <img-->
<!--            src="/media/images/mp-portrait-cropped.jpg"-->
<!--            alt="Michael Picard portrait"-->
<!--            width="250"-->
<!--            height="300"-->
<!--        >-->
        <NuxtPicture
            src="/media/images/mp-portrait-cropped.jpg"
            format="webp,avif"
            quality="30"
            alt="Michael Picard portrait"
            :placeholder="[25,30,75,5]"
            densities="x1 x2"
            width="250"
            height="300"/>
        <div>
          <h1>Michael Picard</h1>
          Full stack web developer
        </div>
      </div>
      <div>
        <p>Hello, my friends and colleagues call me Mike. I am a French senior full stack developer with over 10 years of experience in the e-commerce industry. I obsess over web perfomance and thrive on constant learning. My skills and experience will help you solve problems and make more money.</p>
        <div class="quick-pres__actions">
          <a
              href="https://www.linkedin.com/in/michael-picard-a7607540/"
              target="_blank"
              aria-label="Mon profil Linkedin"
          >
            <LinkedinIcon :size="30"/>
          </a>
          <a
              href="tel:+33658340416"
              aria-label="Me contacter par téléphone"
          >
            <PhoneIcon :size="30"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script
    setup
    lang="ts"
>

import LinkedinIcon from "~/components/icons/LinkedinIcon.vue";
import PhoneIcon from "~/components/icons/PhoneIcon.vue";
</script>

<style
    scoped
    lang=scss
>
.quick-pres__grid {
  display: grid;
  @media screen and (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 2fr;
  }
  place-items: center;
  grid-gap: 2rem;

  > div:first-child {
    text-align: center;
  }

  .quick-pres__actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
  }
}
</style>

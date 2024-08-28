<template>
  <section>
    <div class="quick-pres__grid card__content">
      <div>
        <NuxtImg
            src="/media/images/cropped/mp-portait-grayscale-but-green-400-516.jpg"
            quality="50"
            alt="Michael Picard portrait"
            :placeholder="[20,26,75,5]"
            densities="x1 x2"
            sizes="200px"
            width="200"
            height="258"
        />
        <div>
          <h1>Michael Picard</h1>
          Full stack web developer
        </div>
      </div>
      <div>
        <div class="quick-pres__title">
          <h2>About me</h2>
          <div class="quick-pres__actions">
            <a
                href="https://www.linkedin.com/in/michael-picard-a7607540/"
                target="_blank"
                aria-label="Mon profil Linkedin"
            >
              <LinkedinIcon :size="24"/>
            </a>
            <a
                href="tel:+33658340416"
                aria-label="Me contacter par téléphone"
            >
              <PhoneIcon :size="24"/>
            </a>
          </div>
        </div>
        <p>Hello, my friends and colleagues call me Mike. I am a French senior full stack developer with over 10 years of experience in the e-commerce industry. I obsess over web performance and thrive on constant learning.</p>
        <p>Feel free to peek into my <nuxt-link to="/blog">nerd blog</nuxt-link> or check out my <router-link to="/resume">resume</router-link>.</p>
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
  place-items: center;
  grid-gap: 2rem;

  & {
    @media screen and (min-width: 500px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 600px) {
      grid-template-columns: 1fr 2fr;
    }
  }

  > div:first-child {
    text-align: center;
  }

  .quick-pres__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }

  .quick-pres__actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
  }
}
</style>

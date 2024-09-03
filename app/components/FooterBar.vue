<template>
  <footer>
    <div class="footer__text">©{{ new Date().getFullYear() }} &bullet; this site is <a href="https://github.com/michael-picard/cv-2024" rel="nofollow">open source</a></div>
    <NuxtParticles
        id="particles-footer"
        :options="particleOptions"
    />
  </footer>
</template>

<script
    setup
    lang="ts"
>
import particleOptions from "~/utils/particles-options";

</script>

<style
    scoped
    lang=scss
>
footer {
  background-color: #2f312f;
  color: white;
  padding-top: .25rem;
  height: 50px;
  display: grid;
  place-items: center;

  #particles-footer {
    height: 50px;
    width: 100vw;
    position: absolute;
  }

  .footer__text {
    background-color: transparentize(#2f312f,.2);
    padding: .25rem .5rem;
    z-index: 1;

    a {
      color: oklch(0.72 0.16 222.77);;
    }
  }
}
</style>

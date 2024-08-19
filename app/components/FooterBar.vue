<template>
  <footer>
    <div class="footer__text">©{{ new Date().getFullYear() }} &bullet; <a href="https://github.com/michael-picard/cv-2024" rel="nofollow">source code</a></div>
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
    background-color: #2f312f;
    padding: .25rem .5rem;
    z-index: 1;
  }
}
</style>

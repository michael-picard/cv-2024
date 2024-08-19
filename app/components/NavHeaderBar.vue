<template>
  <header>
    <NuxtParticles
        id="particles-header"
        :options="particleOptions"
        @load="onLoad"
    />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>
</template>

<script
    setup
    lang="ts"
>
import type {Container} from '@tsparticles/engine'
import particleOptions from "~/utils/particles-options";

const onLoad = (container: Container) => {
  // Do something with the container
  // container.canvas.size.height = 50
  // container.pause()
  // setTimeout(() => container.play(), 2000)
}

</script>

<style
    scoped
    lang=scss
>
header {
  background-color: #2f312f;
  color: white;
  padding-bottom: .25rem;
  height: 50px;

  #particles-header {
    height: 50px;
    width: 100vw;
    position: absolute;
    //top: 0;
  }

  nav {
    z-index: 1;
    background-color: #2f312f;
    position: absolute;

    a {
      margin: 0 1rem;
    }
  }
}


</style>

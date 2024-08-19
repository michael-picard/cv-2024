<template>
  <header>
    <NuxtParticles
        id="particles-header"
        :options="particleOptions"
        @load="onLoad"
    />
    <nav>
      <button @click.stop="toggleMainSidebar = !toggleMainSidebar">
        <MenuIcon fill=" white"/>
      </button>
    </nav>
  </header>
</template>

<script
    setup
    lang="ts"
>
import type {Container} from '@tsparticles/engine'
import particleOptions from "~/utils/particles-options";
import MenuIcon from "~/components/icons/MenuIcon.vue";
import {toggleMainSidebar} from "~/stores";

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
  }

  nav {
    z-index: 1;
    background-color: transparentize(#2f312f,.2);
    position: absolute;
    height: 50px;
    display: grid;
    place-items: center;
    padding: 0 1rem;

    button {
      display: flex;
      padding: 4px;
      background-color: transparent;
      appearance: none;
      border: none;
      color: transparent;
      cursor: pointer;

      &:focus-visible {
        outline: none;
        border: none;
      }
    }
  }
}
</style>

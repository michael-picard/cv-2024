<template>
  <header>
    <NuxtParticles
        id="tsparticles"
        :options="options"
        @load="onLoad"
    ></NuxtParticles>
  </header>
</template>

<script setup lang="ts">
import type { Container, ISourceOptions } from '@tsparticles/engine'

// See https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
const options: ISourceOptions = {
  // background: {
  //   color: "#000000",
  // },

  detectRetina: true,
  // backgroundMask: {
  //   enable: true,
  // },
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 40,
    },
    links: {
      distance: 30,
      enable: true,
      triangles: {
        enable: true,
        opacity: 0.1,
      },
    },
    move: {
      enable: true,
      speed: .1,
    },
    size: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
  },
}

const onLoad = (container: Container) => {
  // Do something with the container
  // container.canvas.size.height = 50
  // container.pause()
  // setTimeout(() => container.play(), 2000)
}

</script>

<style scoped lang=scss>
header {
  background-color: #2f312f;
  color: white;
  padding-bottom: .25rem;
  height: 50px;
}

#tsparticles {
  height: 50px;
}
</style>

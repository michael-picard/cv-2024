<template>
  <header>
    <NuxtParticles
        id="tsparticles"
        :options="particleOptions"
        @load="onLoad"
    ></NuxtParticles>
  </header>
</template>

<script setup lang="ts">
import type { Container } from '@tsparticles/engine'
import particleOptions from "~/utils/particles-options";

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

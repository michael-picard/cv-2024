<template>
  <footer>
    <div class="footer__text">©{{ new Date().getFullYear() }} MP</div>
    <NuxtParticles
        id="particles-footer"
        :options="options"
    />
  </footer>
</template>

<script
    setup
    lang="ts"
>
import type {Container, ISourceOptions} from '@tsparticles/engine'

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
      value: 60,
    },
    links: {
      distance: 40,
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
      // close: false,
      // fill: true,
      // options: {
      //   polygon: {
      //     sides: 15,
      //   },
      // },
    },
  }
}
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

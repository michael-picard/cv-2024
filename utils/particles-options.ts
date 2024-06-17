import type {ISourceOptions} from "@tsparticles/engine";

// See https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_IOptions.IOptions.html
const particleOptions: ISourceOptions = {
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

export default particleOptions

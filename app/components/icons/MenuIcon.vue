<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
  ><title>{{ title }}</title>
    <g :fill="fill">
      <line
          x1="2"
          y1="10"
          x2="46"
          :y2="l1y2"
          stroke-width="4"
          :stroke="fill"
      />
      <line
          :x1="l2x1"
          y1="25"
          :x2="l2x2"
          y2="25"
          stroke-width="4"
          :stroke="fill"
      />
      <line
          x1="2"
          y1="40"
          x2="46"
          :y2="l3y2"
          stroke-width="4"
          :stroke="fill"
      />
    </g>
  </svg>
</template>

<script
    setup
    lang="ts"
>
import {toggleMainSidebar} from "~/stores";

const l1y2 = ref(10)
const l2x1 = ref(2)
const l2x2 = ref(46)
const l3y2 = ref(40)

watch(toggleMainSidebar, (val) => {
  if (val) {
    let i = 10
    const intervalL1 = setInterval(() => {
      l1y2.value = i
      i++
      if (i === 41) {
        clearInterval(intervalL1)
      }
    }, 3)
    let z = 40
    const intervalL3 = setInterval(() => {
      l3y2.value = z
      z--
      if (z === 9) {
        clearInterval(intervalL3)
      }
    }, 3)
    let t = 2
    const intervalL2 = setInterval(() => {
      l2x1.value = t
      l2x2.value = 46 - t
      t++
      if (t === 22) {
        clearInterval(intervalL2)
      }
    }, 3)
  } else {
    l1y2.value = 10
    l3y2.value = 40
    l2x1.value = 2
    l2x2.value = 46
  }
})

withDefaults(defineProps<{
  fill?: string,
  title?: string,
  size?: number,
}>(), {
  fill: 'currentColor',
  title: '',
  size: 18,
})
</script>

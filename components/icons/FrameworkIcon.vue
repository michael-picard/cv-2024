<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 48 48"><title>{{ title }}</title>
    <g :fill="fill">
      <rect x="3" y="3" width="17" height="17" rx="3" fill="#003d57"></rect>
      <path
          d="M46.138,9.419,38.581,1.862a2.945,2.945,0,0,0-4.162,0L26.862,9.419a2.943,2.943,0,0,0,0,4.162l7.557,7.557a2.948,2.948,0,0,0,4.162,0l7.557-7.557a2.943,2.943,0,0,0,0-4.162Z"
      ></path>
      <rect x="28" y="28" width="17" height="17" rx="3"></rect>
      <rect x="3" y="28" width="17" height="17" rx="3"></rect>
    </g>
  </svg>
</template>

<script setup lang="ts">
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

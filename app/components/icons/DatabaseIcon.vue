<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
  ><title>{{ title }}</title>
    <g :fill="fill">
      <path d="M24,1C14.8,1,5,3.5,5,8s9.8,7,19,7s19-2.5,19-7S33.2,1,24,1z"></path>
      <path d="M24,17c-5.9,0-15-1.1-19-4.8V24c0,4.5,9.8,7,19,7s19-2.5,19-7V12.2C39,15.9,29.9,17,24,17z"></path>
      <path d="M24,33c-5.9,0-15-1.1-19-4.8V40c0,4.5,9.8,7,19,7s19-2.5,19-7V28.2C39,31.9,29.9,33,24,33z"></path>
    </g>
  </svg>
</template>

<script
    setup
    lang="ts"
>
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

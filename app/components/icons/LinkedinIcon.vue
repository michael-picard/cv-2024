<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
  ><title>{{ title }}</title>
      <path
          :fill="fill"
          d="M46,0H2C0.9,0,0,0.9,0,2v44c0,1.1,0.9,2,2,2h44c1.1,0,2-0.9,2-2V2C48,0.9,47.1,0,46,0z M14.2,40.9H7.1V18 h7.1V40.9z M10.7,14.9c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1C14.8,13,13,14.9,10.7,14.9z M40.9,40.9 h-7.1V29.8c0-2.7,0-6.1-3.7-6.1c-3.7,0-4.3,2.9-4.3,5.9v11.3h-7.1V18h6.8v3.1h0.1c0.9-1.8,3.3-3.7,6.7-3.7c7.2,0,8.5,4.7,8.5,10.9 V40.9z"
      ></path>
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
  size: 48,
})
</script>

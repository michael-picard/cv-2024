<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      :width="size"
      :height="height"
      viewBox="0 0 111 62"
  >
    <path
        d="m86.333 6.2-6.166 6.2 18.5 18.6-18.5 18.6-12.334-12.4-6.166 6.2 18.5 18.6L111 31 86.333 6.2ZM30.833 0 6.167 24.8l6.166 6.2 18.5-18.6 12.334 12.4 6.166-6.2L30.833 0Z"
        fill="#B9D8BF"
    />
    <path
        d="m80.167 0 6.166 6.2-55.5 55.8L0 31l6.167-6.2 24.666 24.8L80.167 0Z"
        fill="#148936"
    />
  </svg>
</template>

<script
    setup
    lang="ts"
>
const props = withDefaults(defineProps < {
  fill? : string,
  title? : string,
  size? : number,
} > (), {
  fill: 'currentColor',
  title: '',
  size: 24,
})

const height = computed(() => props.size * 62 / 111)
</script>

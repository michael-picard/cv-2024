<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="height"
      viewBox="0 0 111 61"
      fill="none"
  >
    <path
        d="M30.8334 0L37.0001 6.1L30.8334 12.2L24.6667 6.1L30.8334 0Z"
        fill="#A9C1EA"
    />
    <path
        d="M43.1667 12.2L49.3333 18.3L43.1667 24.4L37 18.3L43.1667 12.2Z"
        fill="#A9C1EA"
    />
    <path
        d="M92.4999 12.2L98.6666 18.3L92.4999 24.4L86.3333 18.3L92.4999 12.2Z"
        fill="#A9C1EA"
    />
    <path
        d="M104.833 24.3999L111 30.4999L104.833 36.5999L98.6667 30.4999L104.833 24.3999Z"
        fill="#A9C1EA"
    />
    <path
        d="M92.4999 36.6001L98.6666 42.7001L92.4999 48.8001L86.3333 42.7001L92.4999 36.6001Z"
        fill="#A9C1EA"
    />
    <path
        d="M80.1667 48.8L86.3333 54.9L80.1667 61L74 54.9L80.1667 48.8Z"
        fill="#A9C1EA"
    />
    <path
        d="M67.8334 36.6001L74.0001 42.7001L67.8334 48.8001L61.6667 42.7001L67.8334 36.6001Z"
        fill="#A9C1EA"
    />
    <path
        d="M18.4999 12.2L24.6666 18.3L18.4999 24.4L12.3333 18.3L18.4999 12.2Z"
        fill="#A9C1EA"
    />
    <path
        d="M80.1667 0L86.3333 6.1L30.8333 61L0 30.5L6.16667 24.4L30.8333 48.8L80.1667 0Z"
        fill="#1671F1"
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

const height = computed(() => props.size * 61 / 111)
</script>

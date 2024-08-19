<template>
  <svg
      width="410"
      height="176"
      viewBox="0 0 410 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="fat-arrow"
  >
    <path
        d="M69.9999 63.1664C87.8942 39.6664 264.5 40.1664 264.5 40.1664C264.5 40.1664 73.5 31.1664 50.4999 63.1664C27.4999 95.1664 58.4999 118.166 58.4999 118.166L41 125.166H81V83.6664L74.9999 101.166C74.9999 101.166 52.1056 86.6664 69.9999 63.1664Z"
        :fill="fill"
    />
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
  size: 330,
})
</script>

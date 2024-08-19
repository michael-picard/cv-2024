<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 48 48"
  ><title>{{title}}</title>
    <rect
        x="0"
        y="0"
        width="48"
        height="48"
        rx="0"
        ry="0"
        stroke="none"
        :fill="fill"
    ></rect>
    <g
        fill="white"
        transform="translate(7.2 7.2) scale(0.7)"
    >
      <path
          d="M31.376,29.175,27.79,33.658A37.827,37.827,0,0,1,14.343,20.212l4.482-3.586a3.044,3.044,0,0,0,.88-3.614l-4.086-9.2A3.047,3.047,0,0,0,12.067,2.1L4.29,4.116A3.063,3.063,0,0,0,2.029,7.5,45.2,45.2,0,0,0,40.5,45.972a3.064,3.064,0,0,0,3.384-2.261L45.9,35.932a3.049,3.049,0,0,0-1.712-3.551L34.99,28.3A3.046,3.046,0,0,0,31.376,29.175Z"
      ></path>
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

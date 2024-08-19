<template>
  <NavHeaderBar/>
  <main>
    <NuxtPage/>
  </main>
  <FooterBar/>
  <MainSidebar/>
</template>

<script
    setup
    lang="ts"
>

</script>

<style lang="scss">
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  //font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #f5f5f5;
}

img, picture, video, canvas {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

:root {
  --card-top-offset: 1rem;
  --card-margin: 2rem;
}

a {
  color: rgb(var(--v-theme-info))
}

h2 {
  color: rgb(var(--v-theme-info));
  font-variant-caps: small-caps;
  font-weight: 800;
}
</style>

<style
    scoped
    lang="scss"
>
main {
  margin: 2rem auto;
  max-width: 1000px;
  padding: 0 1rem;
}
</style>

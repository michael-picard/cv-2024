<template>
  <NavHeaderBar/>
  <main>
    <QuickPres/>
    <Skills/>
    <Experience/>
    <Education/>
    <QuickBio/>
  </main>
  <FooterBar/>
</template>

<script setup lang="ts">
useHead({
  title: 'Michael Picard - Full Stack Developer',
  meta: [
    { name: 'description', content: 'Hello there ! I am a French senior full stack developer with over 10 years of experience in the e-commerce industry.' }
  ],
})
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
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

img, picture, video, canvas, svg {
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

body {
  background-color: #f5f5f5;
}
</style>

<style scoped lang="scss">
main {
  margin: auto;
  max-width: 1000px;

  :deep(section) {
    padding: 2rem;
    margin: 2rem 0;
    background-color: white;
  }
}
</style>

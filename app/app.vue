<template>
  <LazyNuxtLoadingIndicator
      :height="2"
      color="repeating-linear-gradient(to right,rgb(122,211,207) 0%, rgb(115,168,223) 100%)"
  />
  <!--  <HydrationStatus />-->
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
if (import.meta.browser) {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js',)
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        })
    navigator.serviceWorker.addEventListener('message', event => {
      if (event.data === 'offline') {
        alert(`It seems you are offline. Please check your internet connection.`);
      }
    })
  }
}
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

main {
  margin: 2rem auto;
  max-width: 1000px;
  padding: 0 1rem;
}

a {
  color: rgb(var(--v-theme-info))
}

@media (color-gamut: p3) {
  a {
    color: oklch(0.54 0.14 226.44);
  }
}
</style>

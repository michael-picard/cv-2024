<template>
<!--  <ul class="bg-bubbles">-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--    <li></li>-->
<!--  </ul>-->
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

<script
    setup
    lang="ts"
>
useHead({
  title: 'Michael Picard - Full Stack Developer',
  meta: [
    {
      name: 'description',
      content: 'Hello there ! I am a French senior full stack developer with over 10 years of experience in the e-commerce industry.'
    }
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
  //font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
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

body {
  background-color: #f5f5f5;
}
</style>

<style
    scoped
    lang="scss"
>
main {
  margin: auto;
  max-width: 1000px;

  :deep(section) {
    padding: 2rem;
    margin: 2rem 0;
    background-color: white;
  }
}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //z-index: 1;

  li {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    background-color: rgba(7, 189, 147, 0.72);
    bottom: -160px;
    animation: square 5s infinite;
    transition-timing-function: linear;

    &:nth-child(1) {
      left: 10%;
    }

    :nth-child(2) {
      left: 20%;
      width: 80px;
      height: 80px;
      animation-duration: 8s;
    }

    :nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }

    :nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-duration: 6s;
      background-color: rgba(255, 255, 255, 0.25);
    }

    :nth-child(5) {
      left: 70%;
    }

    :nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;
      animation-delay: 3s;
      background-color: rgba(255, 255, 255, 0.2);
    }

    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;
      animation-delay: 7s;
    }

    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      animation-duration: 4s;
    }

    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      animation-delay: 2s;
    }

    &:nth-child(10) {
      left: 90%;
      width: 160px;
      height: 160px;
      animation-delay: 11s;
    }
  }
}

@keyframes square {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-1500px) rotate(600deg);
  }
}
</style>

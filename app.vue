<template>
  <NavHeaderBar/>
  <main>
    <div class="cards">
      <QuickPres/>
      <Skills/>
    </div>
    <ExperienceSection/>
    <EducationSection/>
    <LighthouseSection/>
    <QuickBioSection/>
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

:root {
  --card-top-offset: 1rem;
  --card-margin: 2rem;
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
    margin: 2rem 0;

    &:first-of-type {
      --index: 1;
    }

    &:nth-child(2) {
      --index: 2;
    }

    &:nth-child(3) {
      --index: 3;
    }

    .card__content {
      padding: 2rem;
      background-color: white;
      border-radius: 1rem;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    }
  }

  :deep(section:not(.card)) {
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  }


  @media screen and (min-height: 700px) { // The card scroll animation is only visible on screens with a height of at least 676px
    :deep(.card) {
      position: sticky;
      top: 1rem;
    }

    :deep(.card__content) {
      transform-origin: 50% 0%;
      will-change: transform;
    }

    @supports (animation-timeline: view()) {
      :deep(.card) {
        --index0: calc(var(--index) - 1); /* 0-based index */
        --reverse-index: calc(var(--numcards) - var(--index0)); /* reverse index */
        --reverse-index0: calc(var(--reverse-index) - 1); /* 0-based reverse index */
      }

      @keyframes scale {
        to {
          transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
        }
      }

      .cards {
        --numcards: 2;
        view-timeline-name: --cards-element-scrolls-in-body;
      }

      :deep(.card__content) {
        --start-range: calc(var(--index0) / var(--numcards) * 100%);
        --end-range: calc((var(--index)) / var(--numcards) * 100%);

        animation: linear scale forwards;
        animation-timeline: --cards-element-scrolls-in-body;
        animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
      }
    }
  }

}


</style>

<template>
  <h1>MY RESUME</h1>
  <Skills/>
  <ExperienceSection/>
  <QuickBioSection/>
  <EducationSection/>
  <LighthouseSection/>
</template>

<script
    setup
    lang="ts"
>
useHead({
  title: 'Resume - Michael Picard',
  meta: [
    {
      name: 'description',
      content: 'Here is my resume, including skills, experiences, a quick bio and some fun.'
    }
  ],
})
</script>

<style
    scoped
    lang=scss
>
:deep(h2) {
  color: rgb(var(--v-theme-info));
  font-variant-caps: small-caps;
  font-weight: 800;
}

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

section:not(.card) {
  padding: 2rem;
  margin: 2rem 0;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
}

.display-resume {
  display: grid;
  place-items: center;
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
</style>

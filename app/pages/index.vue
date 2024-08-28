<template>
<!--  <div class="cards">-->
    <QuickPres/>
    <LatestFromTheBlog/>
<!--  </div>-->
<!--  <div class="display-resume">-->
<!--    <v-btn-->
<!--        color="secondary"-->
<!--        @click="toggleDisplay"-->
<!--    >-->
<!--      DISPLAY MY RESUME-->
<!--    </v-btn>-->
<!--  </div>-->
</template>

<script
    setup
    lang="ts"
>
import LatestFromTheBlog from "~/components/home/LatestFromTheBlog.vue";

const displayResume = ref(false)

function toggleDisplay() {
  displayResume.value = !displayResume.value
}

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

<style
    scoped
    lang="scss"
>
:deep(h2) {
  color: rgb(var(--v-theme-info));
  font-variant-caps: small-caps;
  font-weight: 800;
}

section:not(.card) {
  padding: 2rem;
  margin: 2rem 0;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
}

</style>

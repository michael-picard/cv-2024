<template>
  <section class="card__content">
      <h2>Latest from the blog</h2>
      <PostsGrid :posts="list"/>
  </section>
</template>

<script
    setup
    lang="ts"
>
import PostsGrid from "~/components/blog/PostsGrid.vue";

const list = await queryContent().limit(3).sort({date: -1}).find()

</script>

<style
    scoped
    lang="scss"
>
h2 {
  margin-bottom: 1rem;
}
</style>

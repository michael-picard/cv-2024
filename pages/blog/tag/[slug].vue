<template>
  <h1>Posts with {{ route.params.slug }} tag</h1>
  <PostsGrid :posts="articles"/>
</template>

<script
    setup
    lang="ts"
>
import PostsGrid from "~/components/blog/PostsGrid.vue";

const route = useRoute()

const articles = await queryContent().where({tags: {$in: [route.params.slug]}}).find()
</script>

<style
    scoped
    lang=scss
>

</style>

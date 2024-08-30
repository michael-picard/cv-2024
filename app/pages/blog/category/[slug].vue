<template>
  <h1>Posts in the {{ categories[route.params.slug] }} category</h1>
 <PostsGrid :posts="articles"/>
</template>

<script
    setup
    lang="ts"
>
import PostsGrid from "~/components/blog/PostsGrid.vue";

const route = useRoute()

const categories = {
  performance: 'Performance',
  languages: 'Languages',
  'cs-basics': 'CS Basics',
}

const articles = await queryContent().where({category: categories[route.params.slug]}).find()
</script>

<style
    scoped
    lang=scss
>

</style>

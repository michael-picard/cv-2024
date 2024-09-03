<template>
  <PostsGrid :posts="list"/>
</template>

<script
    setup
    lang="ts"
>
import PostsGrid from "~/components/blog/PostsGrid.vue";

const list = await queryContent().where({draft:{$not:true}}).sort({date: -1}).find()

useHead({
  title: 'Blog Archive - Mike Full Stack Dev',
  meta: [
    {
      name: 'description',
      content: 'Nerd articles from a tiny pixel in a browser all the way to the http server.'
    }
  ],
})
</script>

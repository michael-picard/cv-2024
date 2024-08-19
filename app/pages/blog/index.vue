<template>
  <PostsGrid :posts="list"/>
</template>

<script
    setup
    lang="ts"
>
import PostsGrid from "~/components/blog/PostsGrid.vue";

const list = await queryContent().find()
</script>

<style lang="scss" scoped>
.articles__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;

  article {
    border: 1px solid rgb(218, 220, 224);
    border-radius: .5rem;
    padding: 1rem;
    background-color: white;
  }
}
</style>

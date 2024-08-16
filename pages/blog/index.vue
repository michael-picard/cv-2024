<template>
  <div class="articles__grid">
  <ContentList
      path="/"
      v-slot="{ list }"
  >
    <article
        v-for="article in list"
        :key="article._path"
    >
      <h2><router-link :to="article._path">{{ article.title }}</router-link></h2>
      <p>{{ article.description }}</p>
      <v-chip color="primary" size="small">{{ article.category }}</v-chip>
      <template v-for="tag in article.tags">
        <v-chip color="secondary small">{{ tag }}</v-chip>
      </template>
      <p>{{ format(new Date(article.date),'MMM do, yyyy') }}</p>
    </article>
  </ContentList>
  </div>
</template>

<script
    setup
    lang="ts"
>
import {format} from "date-fns";
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

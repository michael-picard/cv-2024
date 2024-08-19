<template>
  <div class="articles__grid">
    <article
        v-for="article in posts"
        :key="article._path"
    >
      <h2>
        <router-link :to="article._path">{{ article.title }}</router-link>
      </h2>
      <p>{{ article.description }}</p>
      <footer>
        <v-chip
            color="primary"
            size="small"
        >{{ article.category }}
        </v-chip>
        <template v-for="tag in article.tags">
          <v-chip color="secondary small">{{ tag }}</v-chip>
        </template>
      </footer>
      <em>{{ format(new Date(article.date), 'MMM do, yyyy') }}</em>
    </article>
  </div>
</template>

<script
    setup
    lang="ts"
>
import {format} from "date-fns";

defineProps(['posts'])
</script>

<style
    lang="scss"
    scoped
>
.articles__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 1rem;
  padding: 1rem 0;

  article {
    border: 1px solid rgb(218, 220, 224);
    border-radius: .5rem;
    padding: 1rem;
    background-color: white;

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      line-height: 1.5rem;
      word-wrap: normal;
    }

    p {
      margin-bottom: 1rem;
    }

    footer {
      font-family: monospace;
    }

    em {
      opacity: var(--v-disabled-opacity);
    }
  }
}
</style>

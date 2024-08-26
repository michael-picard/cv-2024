<template>
  <div class="articles__grid">
    <article
        v-for="article in posts"
        :key="article._path"
    >
      <router-link :to="article._path">
        <NuxtImg
            v-if="article.image?.length > 0"
            :src="article.image"
            :alt="article.title"
        />
        <NuxtImg
            v-else
            src="media/blog/post-thumbnails/placeholder.png"
            :alt="article.title"
        />
      </router-link>
      <div class="article__inner">
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
        <div>
          <em>{{ format(new Date(article.date), 'MMM do, yyyy') }}</em>
        </div>
      </footer>
      </div>
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
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1rem;
  padding: 1rem 0;

  article {
    border: 1px solid rgb(218, 220, 224);
    border-radius: .5rem;
    background-color: white;
    display: grid;
    grid-template-rows: auto 1fr;

    img {
      width: 100%;
      object-fit: cover;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      aspect-ratio: 30 / 15;
    }

    .article__inner {
      padding: 1rem;
      display: grid;
      grid-template-rows: subgrid;
      align-content: space-between;
      grid-row: span 3;

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
        :deep(.v-chip__content) {
          font-family: monospace;
        }
      }

      em {
        opacity: var(--v-disabled-opacity);
      }
    }


  }
}
</style>

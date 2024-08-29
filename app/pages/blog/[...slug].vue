<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article>
        <BlogBreadcrumb :doc="doc"/>
        <header>
          <h1>{{ doc.title }}</h1>
          <div class="article__details">
            <div class="article__author">
              <NuxtImg
                  src="/media/images/mp-outside-headshot-@64.jpg"
                  alt="mike"
                  width="32"
                  height="32"
              />
              <em>{{ format(new Date(doc.date), 'MMM do, yyyy') }}</em>
            </div>
            <BaselineStatus v-if="doc.baseline" :doc="doc"/>
          </div>
        </header>
        <v-divider/>
        <ContentRenderer :value="doc"/>
        <v-divider/>
        <div class="doc__taxo">Category:
          <v-chip
              color="primary"
              size="small"
          >{{ doc.category }}
          </v-chip>
          <span class="doc__tags">Tags:</span>
          <template v-for="tag in doc.tags">
            <v-chip color="secondary small">{{ tag }}</v-chip>
          </template>
        </div>
      </article>
      <SchemaOrgArticle/>
    </template>
  </ContentDoc>
</template>

<script
    setup
    lang="ts"
>
import {format} from "date-fns";
import BaselineStatus from "~/components/blog/BaselineStatus.vue";
</script>


<style
    scoped
    lang="scss"
>
article {

  h1 {
    margin-bottom: .5rem;
  }

  header {
    .article__details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      align-items: center;
      grid-gap: 1rem;
    }

    .article__author {
      display: flex;
      align-items: center;
      gap: .5rem;

      img {
        border-radius: 50%;
        filter: sepia(.5);
        display: inline;
      }
    }

  }


  em {
    opacity: var(--v-disabled-opacity);
  }

  :deep(h2, h3, h4) {
    margin: 1rem auto;
  }

  :deep(hr) {
    margin: 1rem 0;
  }

  :deep(p) {
    margin-bottom: 1rem;
  }

  :deep(code:not(pre code)) { // Avoid shiki pre > code
    background-color: rgba(var(--v-theme-primary), .2);
    padding: .125rem .5rem;
  }

  :deep(iframe) {
    width: 100%;
  }

  // Shiki
  :deep(pre.shiki) {
    background-color: #2f312f; // rgb(15, 17, 26);
    margin: 1rem 0;
    padding: 1rem 0;
    overflow-x: scroll;

    code {
      counter-reset: step;
      counter-increment: step 0;

      .line::before {
        content: counter(step);
        counter-increment: step;
        width: 1rem;
        margin-right: 1.5rem;
        display: inline-block;
        text-align: right;
        color: rgba(115, 138, 148, .4)
      }
    }
  }

  .doc__taxo {
    font-family: monospace;

    .doc__tags {
      margin-left: 1rem;
      margin-right: .5rem;
    }
  }

}

</style>

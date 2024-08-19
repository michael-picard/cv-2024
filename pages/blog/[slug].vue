<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article>
        <BlogBreadcrumb :doc="doc"/>
        <h1>{{ doc.title }}</h1>
        <em>{{ format(new Date(doc.date), 'MMM do, yyyy') }}</em>
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
    </template>
  </ContentDoc>
</template>

<script
    setup
    lang="ts"
>
import {format} from "date-fns";


</script>


<style
    scoped
    lang="scss"
>
article {
  margin: 2rem 0;

  em {
    opacity: var(--v-disabled-opacity);
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

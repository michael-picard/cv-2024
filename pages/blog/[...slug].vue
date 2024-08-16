<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <em>{{ format(new Date(doc.date),'MMM do, yyyy') }}</em>
        <v-divider />
        <ContentRenderer :value="doc"/>
        <div>Category:
          <v-chip
              color="primary"
              size="small"
          >{{ doc.category }}
          </v-chip>
        </div>
        <div>Tags :
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


<style scoped lang="scss">
article {
  margin: 2rem 0;

  em {
    color: dimgray;
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
}

</style>

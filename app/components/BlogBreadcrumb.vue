<template>
  <div class="breadcrumbs">
    <template v-for="breadcrumb in breadcrumbs">
      <template v-if="!breadcrumb.disabled">
        <NuxtLink
            :to="breadcrumb.item"
        >{{ breadcrumb.name }}
        </NuxtLink>
        <span class="breadcrumbs__separator">&bullet;</span>
      </template>
      <span
          v-if="breadcrumb.disabled"
          data-title
      >{{ breadcrumb.name }}</span>
    </template>
  </div>
</template>

<script
    setup
    lang="ts"
>
const props = defineProps(['doc'])

const breadcrumbs = computed(() => [
  {
    name: 'Home',
    disabled: false,
    item: '/',
  },
  {
    name: 'Blog',
    disabled: false,
    item: '/blog',
  },
  {
    name: props.doc.category,
    disabled: false,
    item: `/blog/category/${props.doc.category.toLowerCase().replace(' ','-')}`,
  },
  {
    name: props.doc.breadcrumbTitle,
    disabled: true,
    item: '',
  },
])

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: breadcrumbs
  }),
])
</script>

<style
    scoped
    lang=scss
>
.breadcrumbs {
  margin: .5rem 0;
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
  line-height: 1;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  [data-title] {
    opacity: var(--v-disabled-opacity);
  }
}
</style>

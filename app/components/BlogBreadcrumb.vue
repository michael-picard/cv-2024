<template>
  <v-breadcrumbs :items="breadcrumbs" divider="&bullet;"/>
</template>

<script
    setup
    lang="ts"
>
const props = defineProps(['doc'])

const breadcrumbs = computed(() => [
  {
    title: 'Home',
    disabled: false,
    to: '/',
  },
  {
    title: 'Blog',
    disabled: false,
    to: '/blog',
  },
  {
    title: props.doc.category,
    disabled: false,
    to: `/blog/category/${props.doc.category.toLowerCase()}`,
  },
  {
    title: props.doc.breadcrumbTitle,
    disabled: true,
    to: '',
  },
])
</script>

<style
    scoped
    lang=scss
>
.v-breadcrumbs {
  flex-wrap: wrap;
  :deep(.v-breadcrumbs-item--link) {
    color: rgb(var(--v-theme-info));
  }
}
</style>

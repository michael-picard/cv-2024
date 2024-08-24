<template>
  <div class="breadcrumbs">
    <template v-for="breadcrumb in breadcrumbs">
      <template v-if="!breadcrumb.disabled">
        <NuxtLink
            :to="breadcrumb.to"
        >{{ breadcrumb.title }}
        </NuxtLink>
        <span class="breadcrumbs__separator">&bullet;</span>
      </template>
      <span v-if="breadcrumb.disabled" data-title>{{ breadcrumb.title }}</span>
    </template>
  </div>
</template>

<script
    setup
    lang="ts"
>
const props = defineProps(['doc'])

const config = useRuntimeConfig()

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

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.value.map((breadcrumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: breadcrumb.title,
          item: `${config.public.appUrl}${breadcrumb.to}` || null,
        })).filter(breadcrumb => breadcrumb.item),
      }),
    },
  ],
})
</script>

<style
    scoped
    lang=scss
>
.breadcrumbs {
  margin: .5rem 0;
  display: flex;
  gap: .5rem;

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

<template>
<div v-if="doc.baseline" :class="baseLineValue">
  <BaselineNewlyAvailable v-if="baseLineValue === 'low'" />
  <BaselineWidelyAvailable v-else-if="baseLineValue === 'high'" />
  <strong>Baseline</strong> {{ baselineDate }} : {{status}}
</div>
</template>

<script
    setup
    lang="ts"
>
import data from "web-features/data.json" with { type: "json" };
import BaselineNewlyAvailable from "~/components/icons/BaselineNewlyAvailable.vue";
import BaselineWidelyAvailable from "~/components/icons/BaselineWidelyAvailable.vue";

const props = defineProps(['doc'])
const {  features } = data;

const baselineDate = computed(() => {
  return new Date(features[props.doc.baseline].status.baseline_low_date).getFullYear()
});
const baseLineValue = computed(() => features[props.doc.baseline].status.baseline)
const status = computed(() => {
  const baseline = features[props.doc.baseline].status.baseline
  if (baseline === 'low') {
    return 'Newly available'
  } else if (baseline === 'high') {
    return 'Widely available'
  } else {
    return 'Limited availability'
  }
});

if (import.meta.browser) {
  console.log(features["intersection-observer-v2"].status);
}
</script>

<style
    scoped
    lang=scss
>
div {
  background-color: rgba(var(--v-theme-primary), var(--v-activated-opacity));
  padding: .5rem 1rem;
  svg {
    margin-right: .5rem;
  }

  &.high {
    background-color: rgba(var(--v-theme-success), var(--v-activated-opacity));
  }
}
</style>

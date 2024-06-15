<template>
  <footer>
      <div>©{{ new Date().getFullYear() }} MP</div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang=scss>
footer {
  background-color: #2f312f;
  color: white;
  padding-top: .25rem;

  > div {
    border-top: thin dashed #fefefe;
    display: grid;
    place-items: center;
  }
}
</style>

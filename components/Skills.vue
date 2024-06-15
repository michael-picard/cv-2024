<template>
  <section>
    <h2>Skills</h2>
    <div class="skills-grid">
      <div>
        <h3>Programming</h3>
        <ul>
          <li v-for="language in languages" :key="language.name">
            {{ language.name }}
            <v-progress-linear color="primary" :model-value="language.level"></v-progress-linear>
          </li>
        </ul>
      </div>
      <div>
        <h3>Frameworks</h3>
        <ul>
          <li v-for="framework in frameworks" :key="framework.name">
            {{ framework.name }}
            <v-progress-linear color="primary" :model-value="framework.level"></v-progress-linear>
          </li>
        </ul>
      </div>
      <div>
        <h3>Databases</h3>
        <ul>
          <li v-for="database in databases" :key="database.name">
            {{ database.name }}
            <v-progress-linear color="primary" :model-value="database.level"></v-progress-linear>
          </li>
        </ul>
      </div>
      <div>
        <h3>Other</h3>
        <ul>
          <li>&check; Proficient in vector design using Figma</li>
          <li>&check; Website crawling, analysis and optimisation</li>
          <li>&check; Keyword Research, rank tracking</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const languages = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node, Deno", level: 85 },
  { name: "PHP", level: 95 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "GO", level: 15 },
  { name: "Docker", level: 20 },
];

const frameworks = [
  { name: "Vue", level: 95 },
  { name: "Nuxt", level: 70 },
  { name: "Woocommerce", level: 95 },
  { name: "Laravel", level: 80 },
  { name: "Shopify", level: 60 },
  { name: "Magento", level: 30 },
];

const databases = [
  { name: "Mysql, Mariadb", level: 95 },
  { name: "SQL Server", level: 95 },
  { name: "MongoDB", level: 60 },
];
</script>

<style scoped lang=scss>
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  h3 {
    margin: 1rem 0 .5rem;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
}
</style>

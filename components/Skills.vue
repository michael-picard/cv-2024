<template>
  <section class="card">
    <div class="card__content">
      <h2>Skills</h2>
      <div class="skills__grid">
        <div>
          <h3>
            <WindowCodeIcon/>
            Programming
          </h3>
          <ul class="skills__languages">
            <li
                v-for="language in languages"
                :key="language.name"
            >
              {{ language.name }}
              <v-progress-linear
                  color="primary"
                  :model-value="language.level"
                  :buffer-value="language.buffer"
              ></v-progress-linear>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <FrameworkIcon/>
            Frameworks
          </h3>
          <ul class="skills__frameworks">
            <li
                v-for="framework in frameworks"
                :key="framework.name"
            >
              {{ framework.name }}
              <v-progress-linear
                  color="primary"
                  :model-value="framework.level"
                  :buffer-value="framework.buffer"
              ></v-progress-linear>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <DatabaseIcon/>
            Databases
          </h3>
          <ul class="skills__databases">
            <li
                v-for="database in databases"
                :key="database.name"
            >
              {{ database.name }}
              <v-progress-linear
                  color="primary"
                  :model-value="database.level"
                  :buffer-value="database.buffer"
              ></v-progress-linear>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <ToolsIcon/>
            Other
          </h3>
          <ul>
            <li>&check; Proficient in vector design using Figma</li>
            <li>&check; Website crawling, analysis and optimisation</li>
            <li>&check; Keyword Research, rank tracking</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script
    setup
    lang="ts"
>
import WindowCodeIcon from "~/components/icons/WindowCodeIcon.vue";
import FrameworkIcon from "~/components/icons/FrameworkIcon.vue";
import DatabaseIcon from "~/components/icons/DatabaseIcon.vue";
import ToolsIcon from "~/components/icons/ToolsIcon.vue";

const languages = ref([
  {name: "JavaScript", level: 0, buffer: 95},
  {name: "TypeScript", level: 0, buffer: 90},
  {name: "Node, Deno", level: 0, buffer: 85},
  {name: "PHP", level: 0, buffer: 95},
  {name: "HTML", level: 0, buffer: 95},
  {name: "CSS", level: 0, buffer: 90},
  {name: "GO", level: 0, buffer: 15},
  {name: "Docker", level: 0, buffer: 20},
]);

const frameworks = ref([
  {name: "Vue", level: 0, buffer: 95},
  {name: "Nuxt", level: 0, buffer: 70},
  {name: "Woocommerce", level: 0, buffer: 95},
  {name: "Laravel", level: 0, buffer: 80},
  {name: "Shopify", level: 0, buffer: 60},
  {name: "Magento", level: 0, buffer: 30},
]);

const databases = ref([
  {name: "Mysql, Mariadb", level: 0, buffer: 95},
  {name: "SQL Server", level: 0, buffer: 95},
  {name: "MongoDB", level: 0, buffer: 60},
  {name: "Redis", level: 0, buffer: 40},
]);

const skills = reactive({
  languages,
  frameworks,
  databases,
})

onMounted(() => {
  const observerOptions: IntersectionObserverInit = {rootMargin: "0px 0px 0px 0px"}

  const ratedSkills = document.querySelectorAll('.skills__grid ul[class^="skills"]')
  ratedSkills.forEach(ul => {
    const property = ul.classList[0].split('__')[1]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skills[property].forEach((skill, i) => {
            setTimeout(() => {
              skill.level = skill.buffer
            }, 15 * i)
          })
        } else {
          skills[property].forEach(database => {
            database.level = 0
          })
        }
      })
    }, observerOptions)
    observer.observe(ul)
  })
})

</script>

<style
    scoped
    lang=scss
>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
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

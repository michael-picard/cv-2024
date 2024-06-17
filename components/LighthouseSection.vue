<template>
  <section>
    <FatArrow/>
    <h2 class="code-like">&lt;Let's do it together ! /&gt;</h2>
    <div class="gauge-grid">
      <template v-for="score in lightHouseSimulations">
        <div>
          <v-progress-circular
              :model-value="score.value"
              :size="100"
              :width="5"
              color="success"
          >
            {{ score.value }}
          </v-progress-circular>
          <div class="gauge-label">{{ score.label }}</div>
        </div>
      </template>
    </div>
  </section>
</template>

<script
    setup
    lang="ts"
>
import FatArrow from "~/components/svg/FatArrow.vue";

function observerCallback(entries: IntersectionObserverEntry[]) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate the lightHouseSimulationsonMounted values
      lightHouseSimulations.forEach((score, index) => {
        if (score.value < 100) {
          setTimeout(() => {
            // Use a while loop to set the value to 100 step by step
            let interval = setInterval(() => {
              score.value += 1
              if (score.value >= 100) {
                clearInterval(interval)
              }
            }, 10)
          }, index * 300)
        }
      })
    } else {
      // reset the values
      lightHouseSimulations.forEach(score => score.value = 0)
    }
  })
}

const lightHouseSimulations = reactive([
  {label: 'Performance', value: 0},
  {label: 'Accessibility', value: 0},
  {label: 'Best Practices', value: 0},
  {label: 'SEO', value: 0},
  {label: 'Beers 🍺', value: 0},
])

onMounted(() => {
  let observer = new IntersectionObserver(observerCallback, {rootMargin: "0px 0px 100px 0px"})
  let target = document.querySelector('.code-like') as HTMLElement
  observer.observe(target)
})
</script>

<style
    scoped
    lang=scss
>
.v-card-title {
  white-space: initial;
}

:deep(.fat-arrow) {
  position: absolute;
  margin-top: -20px;
  margin-left: -2rem;
  display: none;
  @media screen and (min-width: 947px) {
    display: block;
  }
}

.code-like {
  font-family: 'Fira Code', monospace;
  font-size: 1.5rem;
  text-align: center;
}

.gauge-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2rem 0;
  border: 1px solid rgb(218, 220, 224);
  border-radius: .5rem;
  padding: 1rem;

  :deep(.v-progress-circular__content) {
    font-size: 2rem;
  }

  .gauge-label {
    text-align: center;
  }
}
</style>

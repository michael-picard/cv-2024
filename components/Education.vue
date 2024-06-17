<template>
  <section>
    <h2>Education & Certifications</h2>
    <v-timeline side="end">
      <template v-for="degree in degrees">
        <v-timeline-item size="small">
          <template v-slot:opposite>
            <span>{{ degree.year }}</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title>
              {{ degree.label }}
            </v-card-title>
            <v-card-text>{{ degree.text }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </template>
    </v-timeline>
  </section>
  <section>
    <FatArrow />
    <h2 class="code-like">&lt;Let's do it together ! /&gt;</h2>
    <div class="gauge-grid">
      <template v-for="score in lightHouseSimulations">
        <div>
          <v-progress-circular
              :model-value="score.value"
              :size="100"
              :width="5"
              color="#0c6"
          >
            {{ score.value }}
          </v-progress-circular>
          <div class="gauge-label">{{ score.label }}</div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import FatArrow from "~/components/svg/FatArrow.vue";

function observerCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate the lightHouseSimulationsonMounted values
      lightHouseSimulations.forEach((score, index) => {
        setTimeout(() => {
          // Use a while loop to set the value to 100 step by step
          let interval = setInterval(() => {
            score.value += 1
            if (score.value >= 100) {
              clearInterval(interval)
            }
          }, 10)
        }, index * 300)
      })
    } else {
      // reset the values
      lightHouseSimulations.forEach(score => score.value = 0)
    }
  })
}


const degrees = [
  {label: 'Concurrency in GO', year: 2021, text: 'Coursera'},
  {label: 'Redislabs RU101 Certificate', year: 2021, text: 'Redis University'},
  {label: 'Hubspot Design Certification', year: 2014, text: 'Hubspot'},
  {label: 'Certified Web Designer', year: 2014, text: 'Train Simple Adobe Authorized Training Center'},
  {label: 'GAIQ: Google Analytics Individual Qualification', year: 2013, text: 'Google'},
  {label: 'Vocational Bachelor Degree in Business Management', year: 2011, text: 'Unniversité Bordeaux IV'},
  {label: 'BTS Audivisuel', year: 2001, text: `Lycée de l'image et du son d'Angoulême`},
]

const lightHouseSimulations = reactive([
  {label: 'Performance', value: 0},
  {label: 'Accessibility', value: 0},
  {label: 'Best Practices', value: 0},
  {label: 'SEO', value: 0},
  {label: 'Beers 🍺', value: 0},
])

onMounted(() => {
  let observer = new IntersectionObserver(observerCallback, {rootMargin: "0px 0px 100px 0px"})
  let target = document.querySelector('.code-like')
  observer.observe(target)
})
</script>

<style scoped lang=scss>
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

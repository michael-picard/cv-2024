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
    <h2>&lt;Let's do it together ! /&gt;</h2>
    <div class="gauge-grid">
      <template v-for="score in lightHouseSimulations">
        <div>
          <v-progress-circular
              :model-value="100"
              :rotate="360"
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
const degrees = [
  {label: 'Concurrency in GO', year: 2021, text: 'Coursera'},
  {label: 'Redislabs RU101 Certificate', year: 2021, text: 'Redis University'},
  {label: 'Hubspot Design Certification', year: 2014, text: 'Hubspot'},
  {label: 'Certified Web Designer', year: 2014, text: 'Train Simple Adobe Authorized Training Center'},
  {label: 'GAIQ: Google Analytics Individual Qualification', year: 2013, text: 'Google'},
  {label: 'Vocational Bachelor Degree in Business Management', year: 2011, text: 'Unniversité Bordeaux IV'},
  {label: 'BTS Audivisuel', year: 2001, text: `Lycée de l'image et du son d'Angoulême`},
]

const lightHouseSimulations = [
  {label: 'Performance', value: 100},
  {label: 'Accessibility', value: 100},
  {label: 'Best Practices', value: 100},
  {label: 'SEO', value: 100},
  {label: 'Beers 🍺 on fridays', value: 100},
]
</script>

<style scoped lang=scss>
:deep(.v-cart-title) {
  white-space: initial;
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

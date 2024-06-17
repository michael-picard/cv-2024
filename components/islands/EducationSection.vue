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

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.v-timeline-item__body) {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 10% cover 20%;
}
</style>

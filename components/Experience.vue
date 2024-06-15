<template>
  <section>
    <h2>Experience</h2>
    <v-timeline align="start">
      <template v-for="experience in experiences">
        <v-timeline-item>
          <template v-slot:opposite>
            <div class="text-h6">{{ experience.date }}</div>
          </template>
          <div>
            <div class="text-h6">{{ experience.title }}</div>
            <p v-html="experience.description"></p>
          </div>
        </v-timeline-item>
      </template>
    </v-timeline>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    title: 'Full-time lead dev & CTO at go2roues',
    date: 'Since 2019',
    description: `Besides my work for Qualifirst I co-founded GO2ROUES in 2017 and switched to full time in 2019.`
  },
  {
    title: 'Full stack developer at Qualifirst Foods',
    date: '2012 - 2019',
    description: `Tasks include: IT project management, implementing sales
    strategy, database programming and integration, Magento development, Wordpress development, Shopify development, SEO, ecommerce
    marketing management, email marketing, English to French translations. Also Started on my spare time what became a serious stream of income : <a
        href="https://mac-quest.com">https://mac-quest.com</a>, and which allows me to connect with the best macOS software editors.`
  },
  {
    title: 'Bachelor Degree in business management',
    date: '2011 - 2012',
    description: `Sound designer activity: Creation of Samples &amp; Presets EDM packs available for purchase.`
  },
  {
    title: 'Some miscellaneous jobs',
    date: '2008 - 2011',
    description: `Some miscellaneous interim jobs to pay the bills, mostly carpentry. Meanwhile, I taught myself blogging, seo and coding.`
  },
  {
    title: '1 year Working visa in Canada',
    date: '2007 - 2008',
    description: `1 year Working visa in Canada, where I
    learnt English and worked among other things as dog handler for a professional dog musher, a childhood dream accomplishment which I'm very proud of.`
  },
  {
    title: 'Sound engineering',
    date: '2001 - 2007',
    description: `Sound engineering in tv and movie dubbing industry in Paris for various companies as a free lance or an employee. A pathetic job in a pathetic city.`
  }
]
</script>

<style scoped lang=scss>

</style>

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
            <div class="text-h6"><strong>{{ experience.title }}</strong></div>
            <p v-html="experience.description"></p>
          </div>
        </v-timeline-item>
      </template>
    </v-timeline>
  </section>
</template>

<script
    setup
    lang="ts"
>
const experiences = [
  {
    title: 'Lead dev & CTO at GO2ROUES',
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
    description: `While preparing this degree I started making money online through my sound designer skills.`
  },
  {
    title: 'Some miscellaneous jobs',
    date: '2008 - 2011',
    description: `Some miscellaneous interim jobs to pay the bills, mostly carpentry. Meanwhile, I taught myself blogging, seo and coding.`
  },
  {
    title: 'Working visa in Canada',
    date: '2007 - 2008',
    description: `1 year in British Columbia and Yukon territory, where I learnt English and worked among other things as dog handler for a professional dog musher, a childhood dream accomplishment which I'm proud of.`
  },
  {
    title: 'Sound engineering',
    date: '2001 - 2007',
    description: `Worked as a sound engineer in tv and movie dubbing industry in Paris, for various companies as a free lance or an employee. A pathetic job in a pathetic city.`
  }
]
</script>

<style
    scoped
    lang=scss
>
@keyframes reveal-right {
  from {
    opacity: .8;
    transform: translateX(-.5rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes reveal-left {
  from {
    opacity: 0;
    transform: translateX(.5rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

:deep(.v-timeline-item) {
  .v-timeline-item__body, .v-timeline-item__opposite {
    animation-fill-mode: both;
    animation-timing-function: linear;
    animation-timeline: view();
    animation-range: entry 5% cover 10%;
  }


  &:nth-child(odd) {
    .v-timeline-item__body {
      animation-name: reveal-left;
    }
    .v-timeline-item__opposite {
      animation-name: reveal-right;
    }
  }

  &:nth-child(even) {
    .v-timeline-item__body {
      animation-name: reveal-right;
    }
    .v-timeline-item__opposite {
      animation-name: reveal-left;
    }
  }
}
</style>

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
            <div class="text-h6 experience__title"><strong>{{ experience.title }}</strong><span>{{experience.position}}</span></div>
            <p class="experience__whois"><em v-html="experience.whois"></em></p>
            <p v-html="experience.description"></p>
            <ul>
              <li v-for="task in experience.tasks">{{ task }}</li>
            </ul>
            <p v-if="experience.techStack"
            class="experience__stack"
            >Stack : {{ experience.techStack }}</p>
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
    title: 'GO2ROUES',
    position: 'Lead dev & CTO',
    date: 'Since 2019',
    whois: "GO2ROUES sells electric motorcycles online and in stores and repair shops.",
    tasks: [
        "Building the ecommerce website and all its custom functionnalities",
        "Building our custom ERP internal tooling : CRM, warehouse management system, delivery management system, customer service ticket support system, accounting exports, etc..",
        "Writing a browser extension",
        "Writing custom CLI tools",
        "Recruiting & managing developers",
        "Writing API integration with tier services",
        "Coordination of company departments in regards to IT",
    ],
    techStack:  "Woocommerce, Vue, Vite, Laravel, Nuxt, Deno, Redis, MariaDB, MongoDB, WebSockets, Nginx, ESLint, GraphQL, Gitlab CI"
  },
  {
    title: 'QUALIFIRST FOODS',
    position: 'Full stack developer',
    date: '2012 - 2019',
    whois: "Qualifirst is a B2B food distributor in Canada, with a focus on high end products.",
    tasks: [
        "Building and maintaining a network of websites",
        "Building custom ecommerce features",
        "Building custom tooling : warehouse order processing display, expiration date alerts, time to re-order customer alerts, etc..",
        "Improving and monitoring search engine rankings",
        "Automating marketing, tasks, and reports en SQL server since the ERP wasn't open source",
        "English to French translations",
    ],
    techStack: "Magento, Shopify, Wordpress, Odoo, SQL Server, Vue, jQuery"
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
.experience__title {
  display: flex;
  justify-content: space-between;
  span {
    color: rgb(var(--v-theme-info));
    font-weight: bold;
  }
}

.experience__whois {
  color: slategrey;
}

ul {
  li {
    list-style: circle;
  }
}

.experience__stack {
  color: oklch(0.49 0.28 293.89);
  font-family: monospace;
}

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
    animation-range: entry 10% cover 20%;
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

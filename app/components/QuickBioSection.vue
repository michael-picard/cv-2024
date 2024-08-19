<template>
  <section class="quick-bio">
    <h2>Quick Bio</h2>
    <p>I started my careeer as a sound engineer, but five years in Paris were enough to realise I was in the wrong place in the wrong industry, so I packed my bags and flew to Yukon Canada for a one-year working visa to train sled dogs 🐾, a childhood dream. While trying to figure out a new career path I started to sell my sound designer skills in the form of online products on third party sites. This went very well and got me started in affiliate marketing. I taught myself SEO, content marketing, and very quickly coding. Meanwhile, I went back to school and graduated a bachelor degree in business management. Soon after I started working as a free-lancer for small to medium size e-commerce businesses.</p>
    <p id="typed-text"></p>
  </section>
</template>

<script setup lang="ts">

const string = 'On my free time I enjoy taking care of my two kids, lots of sports 🏋️ and French literature 📖. See you soon!'

onMounted(() => {
  const paragraph = document.getElementById('typed-text') as HTMLParagraphElement
  let intervalId = 0
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const text = string.split('')
        let i = 0
        intervalId = setInterval(() => {
          if (i < text.length) {
            paragraph.textContent += text[i]
            i++
          } else {
            clearInterval(intervalId)
          }
        }, 30)
      } else {
        paragraph.textContent = ''
        clearInterval(intervalId)
      }
    })
  })
  observer.observe(document.querySelector('.quick-bio') as HTMLElement)
})

</script>

<style scoped lang=scss>

</style>

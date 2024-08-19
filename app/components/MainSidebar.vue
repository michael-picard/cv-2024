<template>
  <transition name="slide-from-left">
    <aside v-if="toggleMainSidebar">
      <nav>
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </transition>
</template>

<script
    setup
    lang="ts"
>
import {toggleMainSidebar} from "~/stores";
import {onKeyStroke} from "@vueuse/core";

const router = useRouter()

const swipeX = ref(0)

router.afterEach(() => {
  setTimeout(() => {
    toggleMainSidebar.value = false
  }, 250)
})

function listenTouchStart(e) {
  swipeX.value = e.touches[0].clientX
}

function listenTouchMove(e) {
  if (toggleMainSidebar.value === false) return
  let x = e.touches[0].clientX
  if (x - swipeX.value > -100) {
    toggleMainSidebar.value = false
  }
}

onMounted(() => {
  onKeyStroke(['Escape'], () => {
    toggleMainSidebar.value = false
  }, {target: document.body, eventName: 'keyup'})
  document.body.addEventListener('click', (e) => {
    if (e.target !== document.querySelector('aside')) {
      toggleMainSidebar.value = false
    }
  })
  // when the menu is open on mobile close it on swipe left
  document.body.addEventListener('touchstart', listenTouchStart)
  document.body.addEventListener('touchmove', listenTouchMove)
})
</script>

<style
    scoped
    lang=scss
>
aside {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #2f312f;
  height: 100vh;
  padding: 2rem;
  min-width: 200px;
  color: white;
  border-right: 3px solid rgb(var(--v-theme-info));

  ul {
    margin-top: 50px;
    list-style: none;
    padding-left: 0;

    li {
      text-transform: uppercase;
      margin-bottom: 1rem;
      border-bottom: 1px solid lightblue;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}

// Transition
$timing: .3s;
.slide-from-left-enter-active {
  animation: slide-from-left-base-opacity-fade $timing;
}

.slide-from-left-leave-active {
  animation: slide-from-left-base-opacity-fade reverse $timing;
}

@keyframes slide-from-left-base-opacity-fade {
  0% {
    transform: translateX(-90vw);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

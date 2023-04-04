<template>
  <aside :class="[activated ? 'activated' : '', pulsate ? 'pulsate' : '']" @click="activate">
  </aside>
</template>

<script>
import router from '@/router';

export default {
  name: "Sidebar",
  data() {
    return {
      activated: false,
      pulsate: false,
    }
  },
  mounted() {
    if (!this.$store.state.previouslyActivated) {
      setTimeout(() => {if (!this.activated) this.pulsate = true}, 1000 * 2);
    }
  },
  methods: {
    activate() {
      this.pulsate = false;
      this.activated = true;
      this.$store.state.previouslyActivated = true;
      this.$store.state.mainTransitioning = true;

      setTimeout(() => {
        this.$store.state.mainTransitioning = false;
        router.push({ path: '/nav' });
      }, 1000 * 2);
    }
  }
}
</script>

<style lang='scss'>
@import '@/GlobalVariables.scss';


aside {
  position: fixed;
  rotate: 0deg;

  translate: 102vw;
  opacity: 0;

  width: 53.33vh;
  aspect-ratio: 1 / 1.5;

  border-radius: 2vmax;
  background-color: rgb(225, 199, 0);
  
  transition: rotate 250ms, scale 250ms, translate 200ms linear;
  animation: enter-sidebar 1s forwards 500ms;

  cursor: pointer;
}

aside.pulsate::before {
  content: '';
  position: relative;
  display: block;

  background-color: white;
  animation: pulsate .5s infinite;
}

aside:not(.activated):hover {
  scale: 1.05;
}

@keyframes enter-sidebar {
  to {
    opacity: 1;
    rotate: -25deg;
    box-shadow: $card-box-shadow;
  }
}

@media (orientation: landscape) {
  aside {
    translate: 100vw;
  }
}

@media (orientation: portrair) and (max-width: 700px) {
  aside {
    translate: 110vw;
  }
}


aside.activated {
  animation: closing-sidebar $navigation-transition-time forwards;
}

aside.activated + main {
  animation: closing-main $navigation-transition-time forwards;
}

@keyframes pulsate {

}

@keyframes closing-sidebar {
  0%, 100% {
    opacity: 1;
    rotate: -25deg;
    box-shadow: $card-box-shadow;
    z-index: 2;
  }
  50% {
    width: 40vw;
    rotate: -2deg;
    translate: calc(50vw - 50%) 30vh;
  }
  100% {
    width: 40vw;
    rotate: -2deg;
    translate: calc(50vw - 50%) 110vh;
  }
}

@keyframes closing-main {
  0%, 100% {
    box-shadow: $card-box-shadow;
    z-index: -1;
  }
  50% {
    translate: calc(50vw - 50%) 30vh;
    width: 40vw;
    height: 60vw;
    aspect-ratio: 1 / 1.5;
    rotate: 5deg;
    border-radius: 2vmax;
  }
  100% {
    width: 40vw;
    height: 60vw;
    aspect-ratio: 1 / 1.5;
    border-radius: 2vmax;
    translate: calc(50vw - 50%) 110vh;
  }
}


</style>
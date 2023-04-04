<template>
  <nav>
    
    <template v-for="(card, index) in $store.state.cards">
      <button 
        :class="selectedNav == index ? 'selected' : ''"
        :style="`background-color: ${card.color}; z-index: ${index + 1};`"
        @click="select(index, card.url)"
        >
      </button>
      
      <div 
        :class="selectedNav == index ? 'selected' : ''"
        :style="'background-color: ' + card.color"
        >
      </div>
    
    </template>
  </nav>
</template>

<script>
export default {
  name: "NavCards",
  data() {
    return {
      selectedNav: null,
      timeout: null,
    }
  },
  methods: {
    select(id, url) {
      this.selectedNav ??= id;
      if (this.timeout == null)
        this.timeout = setTimeout(() => this.$router.push({ path: url }), 2000);
    }
  }
}
</script>

<style lang="scss" scoped>

@use "sass:math";

@function calculateY($x, $a) {
    @if ($x == 0) {
        @return 0;
    }

    @return $a * math.pow($x, 2);
}

@function calculateXOffset($x, $a) {
  $x-bias: 2;
  $y-bias: $x-bias * 2;
  $y: calculateY($x, $a);

  @if ($x < 0) {
    @return $x * $x-bias - ($y / $y-bias);
  }
  @return $x * $x-bias + ($y / $y-bias);
}

@function rotation($x1, $a) {
  $sign: -1;

  @if ($x1 < 0) {
    $sign: -1;
  }

  $x2: ($x1 + .01) * $sign;

  $a: $a + 8; //Increment to increase angle

  $y1: calculateY($x1, $a);
  $y2: calculateY($x2, $a);

  $ri: $y2 - $y1; //Rise
  $ru: $x2 - $x1; //Run

  $c: math.sqrt(math.pow($ri, 2) + math.pow($ru, 2));

  $result: math.atan($ri / $ru);

  $shallow-modifier: .7;

  @return -$result * ($x1 * $shallow-modifier);
}

nav {
  position: absolute;
  width: inherit;
  height: inherit;

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;

  overflow: hidden;

  isolation: isolate;

  z-index: 0;

  div, button {
    position: absolute;

    flex-grow: 1;
 
    opacity: 0;

    rotate: 0deg;

    min-height: 20vh;
    min-width: 20vw;
    aspect-ratio: 1 / 1.5;
    
    border-radius: 2vmax;
    box-shadow: 0 0 0 6px white;
    border: none;
    background-color: rgb(33, 33, 33);

    --deal-speed: 350ms;
    --deal-delay-bias: 250ms;

    transition: 
      scale 200ms;
  }

  button {
    cursor: pointer;
  }

  @mixin setupCards($amountOfCards) {
    $j: math.round(-($amountOfCards / 2) - 1);
    $a: 10;
    $x: 0;

    $even: $amountOfCards % 2;

    @for $i from 1 to $amountOfCards + 1 {
      $x: $j + $i;

      @if (($even == 0 and $x == 0) or ($x == -1 or $x == 1)) {
        $j: $j + 1;
        $x: $j + $i;
      }


      #{'button:nth-of-type('$i')'} {
        animation: 
          deal-card-#{$i} 
          var(--deal-speed) 
          forwards 
          calc(var(--deal-speed) * #{$i} + var(--deal-delay-bias));
      }

      @if ($x < 0) {
        #{'div:nth-of-type('$i')'} {
          transform: 
            translateX(calculateXOffset($x, $a) - 1vw)
            translateY(calculateY($x, $a) / 2 * 1px);
            rotate: rotation($x, $a);
        }

        @keyframes deal-card-#{$i} {
          from {
            transform: translateY(110vh);
          }
          to {
            opacity: 1;
            transform: 
              translateX(calculateXOffset($x, $a) - 1vw) translateY(calculateY($x, $a) / 2 * 1px);
            rotate: rotation($x, $a);
          }
        }
      }

      @else {
        #{'div:nth-of-type('$i')'} {
          transform: 
            translateX(calculateXOffset($x, $a) + 1vw)
            translateY(calculateY($x, $a) / 2 * 1px);
          rotate: rotation($x, $a);
        }

        @keyframes deal-card-#{$i} {
          from {
            transform: translateY(110vh);
          }
          to {
            opacity: 1;
            transform: 
              translateX(calculateXOffset($x, $a) + 1vw) translateY(calculateY($x, $a) / 2 * 1px);
            rotate: rotation($x, $a);
          }
        }
      }
    }
  }

  @include setupCards(5);
}

// If nav does not have a button.selected then button:hover gets styled
nav:not(:has(.selected)) button:is(:hover, :focus) {
  outline: 0;
  scale: 1.1;
  z-index: 10 !important;
  cursor: pointer;
} 

@supports not(selector(nav:not(:has(button.selected)) button:is(:hover, :focus))) {
  button:is(:hover, :focus) {
    scale: 1.1;
    z-index: 10 !important;
    cursor: pointer;
  }
}

nav:has(button.selected) {
  button {
    pointer-events: none;
  }
}

div.selected {
  opacity: 1;
  position: fixed;
  animation: fullscreen-card forwards 1.4s;
  z-index: 10;
}

button.selected {
  display: none;
}

@keyframes fullscreen-card {
  30% {
    transform: translate(0, 0);
    rotate: initial;
  }
  100% {
    min-width: 100vw;
    min-height: 100vh;
    transform: translate(0, 0);
    rotate: initial;
    border-radius: 0;
  }
}

</style>
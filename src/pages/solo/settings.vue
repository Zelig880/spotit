<template>
  <h1>Timer</h1>

  <router-link class="cta" to="/solo/game">
    Ciao
  </router-link>
</template>

<script lang="ts">
import { useGameStore } from '~/stores/game'
import { useSymbolsStore } from '~/stores/symbols'

export default {
  setup() {
    const gameStore = useGameStore()
    const symbols = useSymbolsStore().symbols

    return { gameStore, symbols }
  },
  mounted() {
    this.gameStore.initialize()
  },
  methods: {
    getSymbolPath(symbolId) {
      return `/symbols/${this.symbols[symbolId]}`
    },
  },
}

</script>
<style lang="scss">
.card {
  width: 600px;
  margin: 0 auto;
  display: flex;
  button{
    flex:1;
    margin:3px;
    border-radius:5px;
    background-color: lightBlue;
    padding:5px;
    width: 30px;
    :hover{
      background-color: lightGreen;
    }
  }
  button img{
    margin: 0 auto;
  }
}
</style>

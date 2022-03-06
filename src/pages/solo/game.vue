<template>
  <h1>Solo Game</h1>
  <div>{{ gameStore.formattedCountdown }}</div>
  <button @click="gameStore.stopTimer">
    stop
  </button>
  <button @click="gameStore.startTimer">
    start
  </button>
  Current Card
  <div class="card">
    <button v-for="(symbol, index) in gameStore.currentCard" :key="`current-${index}`" @click="gameStore.selectCard(symbol)">
      <img :src="getSymbolPath( symbol )" :alt="`symbol number ${symbol}`">
    </button>
  </div>

  Player Card
  <div class="card">
    <button v-for="(symbol, index) in gameStore.playerCard" :key="`player-${index}`" @click="gameStore.selectCard(symbol)">
      <img :src="getSymbolPath( symbol )" :alt="`symbol number ${symbol}`">
    </button>
  </div>

  <div>
    score: {{ gameStore.score }} Lives: {{ gameStore.lives }}
  </div>
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
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  button{
    flex:1;
    margin:3px;
    border-radius:5px;
    background-color: lightBlue;
    padding:5px;
    flex: 1 1 90px;
    height: 55px;
    :hover{
      background-color: lightGreen;
    }
  }
  button img{
    margin: 0 auto;
  }
}
</style>

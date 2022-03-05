<template>
  <h1>Solo Game</h1>
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
<style>
.card {
  width: 600px;
  margin: 0 auto;
  display: flex;
}
.card button{
  flex:1;
  margin:3px;
  border-radius:5px;
  background-color: lightBlue;
  padding:5px;
  width: 30px;
}
.card button img{
  margin: 0 auto;
}
.card button:hover{
  background-color: lightGreen;
}
</style>

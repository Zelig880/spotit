import { acceptHMRUpdate, defineStore } from 'pinia'
import game from '../services/game'

export const useGameStore = defineStore('game', {
  state: () => ({
    set: [],
    playerCardIndex: 0,
    currentCardIndex: 1,
    userCards: [],
    lives: 3,
    score: 0,
    symbolsPerCard: 8,
  }),
  getters: {
    playerCard() {
      return this.set[this.playerCardIndex]
    },
    currentCard() {
      return this.set[this.currentCardIndex]
    },
  },
  actions: {
    initialize() {
      this.set = game(this.symbolsPerCard)
    },
    selectCard(symbol) {
      if (this.currentCard.includes(symbol) && this.playerCard.includes(symbol)) {
        this.score++
        this.currentCardIndex++
      }
      else {
        this.lives--
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))

import { acceptHMRUpdate, defineStore } from 'pinia'
import game from '../services/game'
import { shuffleArray } from '../services/utils'

const gameStatuses = {
  SETUP: 'setup',
  PLAYING: 'playing',
  FINISHED: 'finished',
  PAUSED: 'paused',
}

const initialState = {
  set: [],
  playerCardIndex: 0,
  currentCardIndex: 1,
  userCards: [],
  lives: 3,
  score: 0,
  symbolsPerCard: 8,
  timer: null,
  countDownSecond: 10,
  gameStatus: gameStatuses.SETUP,
}

export const useGameStore = defineStore('game', {
  state: () => (initialState),
  getters: {
    playerCard() {
      return shuffleArray(this.set[this.playerCardIndex])
    },
    currentCard() {
      return shuffleArray(this.set[this.currentCardIndex])
    },
    formattedCountdown() {
      const minutes = Math.floor(this.countDownSecond / 60)
      const seconds = this.countDownSecond - minutes * 60
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    },
  },
  actions: {
    initialize() {
      this.set = game(this.symbolsPerCard)
      this.gameStatus = gameStatuses.PLAYING
      if (this.timer) this.stopTimer()
      this.timer = setInterval(() => {
        if (this.countDownSecond === 0) {
          this.stopTimer()
          this.gameStatus = gameStatuses.FINISHED
          return
        }
        this.countDownSecond -= 1
      }, 1000)
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
    stopTimer() {
      clearInterval(this.timer)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))

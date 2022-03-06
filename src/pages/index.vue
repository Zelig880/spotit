<template>
  <div class="index">
    <div class="index--header">
      <h1>
        <img id="logo" src="/logo-128.png" alt="Spottit logo">
      </h1>
      <p class="text-l">
        Welcome back...
      </p>
    </div>
    <div class="index--menu">
      <menu-card to="/solo/level-select" text="Solo game" sub-text="Timer game" src="/symbols/1st-place-medal-svgrepo-com.svg" :index="0" />
      <menu-card to="/game/solo" text="Solo game" sub-text="Timer game" src="/symbols/1st-place-medal-svgrepo-com.svg" :index="1" />
      <menu-card to="/game/solo" text="Solo game" sub-text="Timer game" src="/symbols/1st-place-medal-svgrepo-com.svg" :index="2" />
      <menu-card to="/game/solo" text="Solo game" sub-text="Timer game" src="/symbols/1st-place-medal-svgrepo-com.svg" :index="3" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()

const { t } = useI18n()
</script>

<style lang="scss">
.index{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  #logo{
    border-radius: 25px;
    margin: auto;
  }
  &--header{
    margin-bottom: 40px;
  }
  &--menu{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 15px;
  }
}
</style>

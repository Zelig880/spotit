<template>
  <div>
    <h1>
      <img id="logo" src="/logo-128.png" alt="Spottit logo">
    </h1>
    <p>Welcome back...</p>
    <div class="menu-container">
      <menu-card to="/solo/settings" text="Solo game" sub-text="Timer game" src="/symbols/1st-place-medal-svgrepo-com.svg" :index="0" />
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
#logo{
  border-radius: 25px;
  margin: auto;
}
.menu-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 15px;
}
</style>

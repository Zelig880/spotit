<template>
  <div>
    <h1>Spottit</h1>
    <router-link to="/game/solo">
      Solo play
    </router-link>
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
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

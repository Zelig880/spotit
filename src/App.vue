<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'SpotIt',
  meta: [
    { name: 'description', content: 'Mobile game written as a PWA' },
  ],
})
</script>

<template>
  <router-view />
</template>

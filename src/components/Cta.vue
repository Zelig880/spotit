<template>
  <button class="cta">
    <slot />
  </button>
</template>

<script setup>
</script>

<style lang="scss">
@import '~/styles/colors.scss';

.cta{
  width: 100%;
  background-color: $maximum-yellow-red;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.75em;
  padding: 5px;
}
</style>

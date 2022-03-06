<template>
  <router-link :to="to" :class="[styleClassName, 'menu-card']">
    <img :src="src" alt="">
    <div>
      <div class="text-xxl">
        {{ text }}
      </div>
      {{ subText }}
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  to: String,
  src: String,
  text: String,
  subText: String,
  index: Number,
})

const styleClassName = computed(() => {
  const colorIndex = props.index % 4
  return `style-${colorIndex}`
})
</script>

<style lang="scss">
@import '~/styles/colors.scss';
.menu-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  min-height:300px;
  border-radius: 25px;
  padding: 50px 15px;

  img{
    width: 75px;
    height: 75px;
    margin: 0 auto;
  }
}
.style-0{
  background-color: lighten($cadet-blue, 20%);
  color: darken($cadet-blue, 30%);
}
.style-1{
  background-color: lighten($maximum-yellow-red, 20%);
  color: darken($maximum-yellow-red, 30%);
}
.style-2{
  background-color: lighten($opal, 20%);
  color: darken($opal, 30%);
}
.style-3{
  background-color: lighten($opera-mauve, 20%);
  color: darken($opera-mauve, 30%);
}
</style>

<template>
  <section class="level-select">
    <ul class="level-select--menu">
      <li class="level-select--card">
        <router-link class="cta" to="/solo/game">
          Ciao
        </router-link>
      </li>
      <li class="level-select--card">
        <router-link class="cta" to="/solo/game">
          Ciao
        </router-link>
      </li>
      <li class="level-select--card level-select--card__inactive">
        ciao
      </li>
      <li class="level-select--card level-select--card__inactive">
        ciao
      </li>
    </ul>
  </section>
</template>

<script lang="ts">

</script>
<style lang="scss">
.level-select {
  background-image: url('/ui/level-select.png');
  background-repeat: no-repeat;
  height: 100%;
  background-size: contain;
  padding-top:60px;
  padding-left: 25px;
  padding-right: 25px;
  &--menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &--card{
    background-image: url('/ui/level-card-active.png');
    background-repeat: no-repeat;
    background-size: contain;
    width: 65px;
    height: 70px;
    margin-top: 5px;
    a{
      display: block;
      height: 100%;
      width: 100%;
    }
    &__inactive{
      height: 75px;
      margin-top: 0px;
      background-image: url('/ui/level-card-inactive.png');
    }
  }
}
</style>

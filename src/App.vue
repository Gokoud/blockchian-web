<template>
  <ms-header></ms-header>
  <router-view/>
  <ms-footer></ms-footer>
</template>

<script setup>
import msHeader from './components/ms-header/ms-header.vue'
import msFooter from './components/ms-footer/ms-footer.vue'
</script>

<style>
@import url('./style/normal.css');
</style>

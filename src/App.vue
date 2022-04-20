<script setup>
import msHeader from '@/components/ms-header/ms-header.vue'
import msFooter from '@/components/ms-footer/ms-footer.vue'
</script>

<template>
  <ms-header></ms-header>
  <router-view/>
  <ms-footer></ms-footer>
</template>

<style>
@import url('./style/normal.css');
</style>

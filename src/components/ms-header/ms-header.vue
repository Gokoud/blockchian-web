<template>
  <header>
    <nav>
      <ul class="ms-menu">
        <li class="ms-menu-item" v-for="route in routerList" :key="route.path">
          {{route.title}}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const routerList = computed(() => router.options.routes.map((route) => {
  return {path: route.path, title: route.meta.title}
}))


</script>

<style scoped lang='scss'>
@import './ms-header.scss';
</style>
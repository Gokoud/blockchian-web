<script setup>
import msGoods from "@/components/ms-goods/ms-goods.vue";

const props = defineProps({ 
    list: Array 
});
</script>

<template>
    <div class="goods-list">
        <template v-for="goods in props.list" :key="goods.id">
            <ms-goods :goods="goods"></ms-goods>
        </template>
    </div>
</template>

<style scoped lang="scss">
@import "ms-goods-list";
</style>

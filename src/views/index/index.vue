<script setup>
    import { fromJSON } from 'postcss';
    import { reactive } from 'vue';
    import MsSwiperGoods from '@/components/ms-swiper-goods/ms-swiper-goods.vue';
    import MsWrapper from '@/components/ms-wrapper/ms-wrapper.vue';
    import MsBanner from '@/components/ms-banner/ms-banner.vue';
</script>

<template>
    <div class="exhibition-area">
        <ms-wrapper></ms-wrapper>
        <ms-banner></ms-banner>
    </div>
    <main>
        <ms-swiper-goods></ms-swiper-goods>
    </main>
</template>

<style scoped lang='scss'>
@import './index.scss';
</style>
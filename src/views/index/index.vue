<script setup>
import mockData from '@/mock/mock.json'
// import msBanner from '@/components/ms-banner/ms-banner.vue';
import MsGoodsList from '@/components/ms-goods-list/ms-goods-list.vue';
import MsSwiperGoods from '@/components/ms-swiper-goods/ms-swiper-goods.vue';
import MsWrapper from '@/components/ms-wrapper/ms-wrapper.vue';
import { reactive } from 'vue';
const goodsList = reactive(mockData.data.slice(0, 4))
</script>

<template>
    <main>
        <div class="exhibition-area">
            <ms-wrapper></ms-wrapper>
        </div>
        <!-- <ms-banner></ms-banner> -->
        <ms-goods-list :list="goodsList"></ms-goods-list>
        <ms-swiper-goods></ms-swiper-goods>
    </main>
</template>

<style scoped lang='scss'>
@import './index.scss';
</style>
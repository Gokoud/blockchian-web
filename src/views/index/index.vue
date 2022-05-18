<script setup>
import http from '@/utils/http';
import mockData from '@/mock/mock.json'
import { onMounted, reactive, ref } from 'vue';
import { useCanvas } from '@/hooks/useCanvas';
import MsSwiperGoods from '@/components/ms-swiper-goods/ms-swiper-goods.vue';
import MsWrapper from '@/components/ms-wrapper/ms-wrapper.vue';
import MsBanner from '@/components/ms-banner/ms-banner.vue';
import MsGoodsList from '@/components/ms-goods-list/ms-goods-list.vue'

const list = reactive(mockData.data.slice(0, 10));
const fetchGithubApi = () => {
    http.get('/users')
}
const { drawCanvas } = useCanvas('canvas');

onMounted(() => {
    drawCanvas();
    fetchGithubApi()
});

</script>

<template>
    <div class="exhibition-area">
        <ms-wrapper></ms-wrapper>
        <ms-banner></ms-banner>
        <div class="canvas">
            <canvas id="canvas" width="400" height="400"></canvas>
        </div>
    </div>
    <main>
        <ms-goods-list :list="list"></ms-goods-list>
        <ms-swiper-goods></ms-swiper-goods>
    </main>
</template>

<style scoped lang='scss'>
@import './index.scss';

.canvas {
    position: relative;
    &::before {
        content: 'Y';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 2px;
        background-color: $primary-color;
    }
    &::after {
        content: 'X';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        transform: rotate(180deg);
    }
}
</style>
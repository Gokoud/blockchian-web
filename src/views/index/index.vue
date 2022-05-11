<script setup>
import { fromJSON } from 'postcss';
import { onMounted, reactive, ref } from 'vue';
import { useCanvas } from '@/hooks/useCanvas';
import MsSwiperGoods from '@/components/ms-swiper-goods/ms-swiper-goods.vue';
import MsWrapper from '@/components/ms-wrapper/ms-wrapper.vue';
import MsBanner from '@/components/ms-banner/ms-banner.vue';

const { drawCanvas } = useCanvas('canvas')
onMounted(() => {
    drawCanvas()
})

</script>

<template>
    <div class="exhibition-area">
        <ms-wrapper></ms-wrapper>
        <ms-banner></ms-banner>
        <div class="canvas" style="display: none;">
            <canvas id="canvas" width="400" height="400"></canvas>
        </div>
    </div>
    <main>
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
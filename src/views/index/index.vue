<script setup>
    import { fromJSON } from 'postcss';
    import { onMounted, reactive, ref } from 'vue';
    import MsSwiperGoods from '@/components/ms-swiper-goods/ms-swiper-goods.vue';
    import MsWrapper from '@/components/ms-wrapper/ms-wrapper.vue';
    import MsBanner from '@/components/ms-banner/ms-banner.vue';

    const drawCanvas = async () => {
        const canvas = document.getElementById('canvas');
        const image = await createImg();
        const ctx = canvas.getContext("2d",{
            antialias: true // 开启抗锯齿
        });
        // 初始化
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 500, 500)
        ctx.save();
        // 绘制图片
        ctx.drawImage(image, 0, 0, 340, 191, 0, 0, 400, 400);
    }
    const createImg = () => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = '/src/static/images/animation-example.png';
            img.setAttribute('crossorigin','anonymous')
            img.onload = () =>  resolve(img) 
        })
    }
    onMounted(() => {
        drawCanvas('https://artec.oss-cn-shenzhen.aliyuncs.com/9gh2w68qydcu6xreaqga.jpg')
    })
</script>

<template>
    <div class="exhibition-area">
        <ms-wrapper></ms-wrapper>
        <!-- <ms-banner></ms-banner> -->
        <div class="canvas">
            <canvas id="canvas" width="400" height="400"></canvas>
            <!-- <img id="source" style="display: none" src="" crossorigin="anonymous" alt="需要绘制的图"> -->
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
        background-color: $dark-color;
    }
}
</style>
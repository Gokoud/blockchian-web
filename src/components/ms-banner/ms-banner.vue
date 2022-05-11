<script setup>
import { Autoplay } from 'swiper' // swiper 功能模块
import { Swiper, SwiperSlide } from 'swiper/vue'; // swiper 组件
import 'swiper/css'; // 核心 swiper css 样式
import 'swiper/css/autoplay'

const modules = [Autoplay]

const onSwiper = (swiper) => {
    console.log(swiper)
}

const onSlideChange = () => {
    console.log('slide change')
}

</script>

<template>
    <div class="banner">
        <swiper :modules="modules" :slides-per-view="1" @swiper="onSwiper" @slideChange="onSlideChange" :autoplay="{delay: 2000}">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper>
    </div>
</template>

<style scoped lang='scss'>
@import './ms-banner.scss';
</style>
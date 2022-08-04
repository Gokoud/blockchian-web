<script setup>
import { reactive } from 'vue';
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

const getImgUrl = (name) => {
    return new URL(`../../static/images/${name}`, import.meta.url).href
}

const banner = reactive([getImgUrl('banner1.jpg'), getImgUrl('banner2.png'), getImgUrl('banner3.jpg')])
</script>

<template>
    <div class="banner">
        <swiper 
        :modules="modules" 
        :slides-per-view="1" 
        :autoplay="{delay: 2000}" 
        :loop="true" 
        @swiper="onSwiper" 
        @slideChange="onSlideChange">
        <template v-for="(imgs, index) in banner">
            <swiper-slide><img class="banner-child" :src="imgs" :alt="`banner${index}`"></swiper-slide>
        </template>
        </swiper>
    </div>
</template>

<style scoped lang='scss'>
@import './ms-banner.scss';
</style>
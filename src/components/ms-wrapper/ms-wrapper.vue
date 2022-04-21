<script setup>
import { onMounted, reactive, ref } from 'vue';
const wrapper = ref(null);
let lFollowX = ref(0);
let lFollowY = ref(0);
let x = ref(0);
let y = ref(0);
let friction = ref(1 / 10);
let transform = ref('');
onMounted(() => {
    let el = wrapper.value;
})
const animate = () => {
    x.value += (lFollowX.value - x.value) * friction.value;
    y.value += (lFollowY.value - y.value) * friction.value;
    transform.value = `transform:translate(-50%, -50%) perspective(600px) rotateY(${-x.value}deg) rotateX(${y.value}deg)`
    window.requestAnimationFrame(animate);
}
const moveMouse = (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let lMouseX = Math.max(-100, Math.min(100, width / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, height / 2 - e.clientY));
    lFollowX.value = (4 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY.value = (2 * lMouseY) / 100;
}
animate()
</script>

<template>
    <div class="wrapper" ref="wrapper" @mousemove="moveMouse" @click="moveMouse">
        <img class="wrapper-child" :style="transform" src="@/static/images/animation-example.png" alt="悬浮相框">
    </div>
</template>

<style scoped lang='scss'>
@import './ms-wrapper.scss';
</style>
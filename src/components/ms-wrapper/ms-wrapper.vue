<script setup>
import {onMounted, reactive, ref} from "vue";
const wrapper = ref(null);
let lFollowX = 0;
let lFollowY = 0;
let x = 0;
let y = 0;
let friction = 1 / 10;
let transform = ref("");
onMounted(() => {
    let el = wrapper.value;
});
const animate = () => {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    transform.value = `transform:translate(-50%, -50%) perspective(600px) rotateY(${-x}deg) rotateX(${y}deg)`;
    window.requestAnimationFrame(animate);
};
const moveMouse = e => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let lMouseX = Math.max(-100, Math.min(100, width / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, height / 2 - e.clientY));
    lFollowX = (4 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (2 * lMouseY) / 100;
};
animate();

const touchStart = (e) => {
    console.log(e)
};
</script>

<template>
    <div
        class="wrapper"
        ref="wrapper"
        @touchstart="touchStart"
        @mousemove="moveMouse"
        @click="moveMouse"
    >
        <img
            class="wrapper-child"
            :style="transform"
            src="@/static/images/animation-example.png"
            alt="悬浮相框"
        />
    </div>
</template>

<style scoped lang="scss">
@import "./ms-wrapper.scss";
</style>

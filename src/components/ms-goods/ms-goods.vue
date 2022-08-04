<script setup>
import { reactive } from 'vue';
const props = defineProps({
  goods: Object
})
const goods = reactive(props.goods)
</script>

<template>
  <div class="goods">
    <div class="img">
      <img class="img-child" :src="goods.goods_img">
    </div>
    <div class="info">
      <div class="title">{{goods.title}}</div>
      <div class="description">
        <span class="desc-child">{{goods.description}}</span>
      </div>
      <div class="price">
        <span class="price-child">{{goods.status > 20 ? '敬请期待' : goods.price}}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
@import './ms-goods.scss';
</style>
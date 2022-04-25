<!--
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-21 16:55:29
 * @LastEditTime: 2022-04-25 14:01:18
-->
<template>
    <div class="home">home</div>
    <a-button type="primary" :loading="iconLoading" @click="enterIconLoading">
        <template #icon><PoweroffOutlined /></template>
        延迟1s
    </a-button>
</template>

<script setup lang="ts">
import {
    onMounted, onBeforeMount, onBeforeUnmount, ref,
} from 'vue';

interface DelayLoading {
  delay: number;
}

const iconLoading = ref<boolean | DelayLoading>(false);
const enterIconLoading = () => {
    iconLoading.value = { delay: 1000 };

    setTimeout(() => {
        iconLoading.value = false;
    }, 6000);
};
onBeforeMount(() => {
    console.log(1111);
});
onMounted(() => {
    console.log(222);
});
onBeforeUnmount(() => {
    console.log(333);
});
</script>

<style lang="scss" scoped>
</style>

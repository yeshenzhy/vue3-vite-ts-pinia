<!--
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-21 16:55:29
 * @LastEditTime: 2022-04-24 11:26:45
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
});
onMounted(() => {
});
onBeforeUnmount(() => {
});
</script>

<style lang="scss" scoped>
</style>

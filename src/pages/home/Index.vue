<!--
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-21 16:55:29
 * @LastEditTime: 2022-04-26 17:51:39
-->
<template>
    <Suspense>
        <template #default>
            <AsyncComp />
            <!-- <AsyncAddress/> -->
        </template>

        <template #fallback>
            <h1>LOADING...</h1>
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import {
    onMounted, onBeforeMount, onBeforeUnmount, defineAsyncComponent,
} from 'vue';

const AsyncComp = defineAsyncComponent(() => import('./AsyncComp.vue'));

// **************************************************
onBeforeMount(() => {

});
onMounted(() => {

});
onBeforeUnmount(() => {

});
</script>

<style lang="scss" scoped>
</style>

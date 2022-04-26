<!--
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-26 17:47:39
 * @LastEditTime: 2022-04-26 18:01:04
-->
<template>
    <div>
        <div class="home">home</div>
        <a-button type="primary" @click="changeValue">
            <template #icon><reddit-outlined /></template>
            点我
        </a-button>
        <input ref="inputRef" type="text">
        <h3>m1: {{ m1 }}</h3>
        <h3>m2: {{ m2 }}</h3>
        <h3>m3: {{ m3 }}</h3>
        <h3>m4: {{ m4 }}</h3>
        <a-button type="primary" @click="update">
            <template #icon><reddit-outlined /></template>
            更新
        </a-button>
    </div>
</template>

<script lang="ts">
import {
    onMounted, onBeforeMount, onBeforeUnmount, ref, watch, reactive, shallowReactive, shallowRef, defineComponent,
} from 'vue';

export default defineComponent({
    setup() {
        const obj = reactive({
            name: '小象',
            obj2: {
                food: '鱼',
            },
            age: 18,
        });
        const obj11 = reactive({
            name: '张三',

            age: 18,
        });
        const m1 = reactive({ a: 1, b: { c: 2 } });
        const m2 = shallowReactive({ a: 1, b: { c: 2 } });

        const m3 = ref({ a: 1, b: { c: 2 } });
        const m4 = shallowRef({ a: 1, b: { c: 2 } });
        const update = () => {
            m1.b.c += 1;
            m2.b.c += 1;

            m3.value.a += 1;
            m4.value.a += 1;
        };
        const changeValue = () => {
            obj.name = '小狗';
            obj11.name = '李四';
        };
        const inputRef = ref<HTMLElement|null>();
        // 监听 number 变量，如果有发生变化，自动运行后面的回调函数
        watch([() => obj.name, () => obj11.name], (newVal, oldVal) => {
            console.log({ newVal, oldVal });
        });

        onBeforeMount(() => {
        });
        onMounted(() => {
            if (inputRef.value) {
                inputRef.value.focus();
            }
        });
        onBeforeUnmount(() => {
        });
        // 模拟异步加载组件
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    m1,
                    m2,
                    m3,
                    m4,
                    changeValue,
                    update,
                });
            }, 2000);
        });
    },
});

</script>

<style lang="scss" scoped>
</style>

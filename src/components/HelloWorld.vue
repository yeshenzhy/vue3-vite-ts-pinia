<!--
 * @Descripttion:
 * @Author: zhy
 * @Date: 2022-04-20 20:31:02
 * @LastEditTime: 2022-04-23 19:10:56
-->
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">
        count is: {{ count }}
    </button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<style lang="scss">
a {
    font-size: 30px;
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    padding: 2px 4px;
    color: #304455;
    background-color: #eee;
    border-radius: 4px;
}
</style>

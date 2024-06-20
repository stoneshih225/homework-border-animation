<script setup lang="ts">
import { ref } from 'vue';
import Main from './components/Main/Main.vue';
import Button from './components/Button/Button.vue';
import Radio from './components/Radio/Radio.vue';
import controllerConfig from './controllerConfig';

const layout = ref<1 | 3 | 5 | 10>(1);
const animationMode = ref<'All' | 'Random'>('All');
const shape = ref<'Rectangle' | 'Heart'>('Rectangle');
</script>

<template>
    <div class="app">
        <div class="content-container">
            <Main
                :layout="layout"
                :animationMode="animationMode"
                :shape="shape"
            />
        </div>
        <div class="controller-container">
            <Button
                v-model:layout="layout"
                :buttonList="controllerConfig.layouts"
            />
            <Radio
                v-model:value="animationMode"
                :radioList="controllerConfig.animationModes"
            />
            <Radio
                v-model:value="shape"
                :radioList="controllerConfig.shapes"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app {
    position: relative;
    overflow: hidden;
    padding: 1rem;
    min-width: 390px;
    min-height: 100vh;
    background-color: #000;

    .content-container {
        position: relative;
        margin-bottom: 3rem;
        padding-bottom: calc(100% / 358 * 358);
        height: 100%;

        @media (min-width: 576px) {
            margin: 0 auto 3rem;
            padding-bottom: calc(576px / 358 * 358);
            width: 576px;
        }
    }

    .controller-container {
        @media (min-width: 576px) {
            margin: 0 auto;
            width: 576px;
        }
    }
}
</style>

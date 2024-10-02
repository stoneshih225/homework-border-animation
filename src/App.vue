<script setup lang="ts">
import { ref } from 'vue';
import Main from './components/Main/Main.vue';

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
    </div>
</template>

<style lang="scss" scoped>
.app {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1rem;
    min-width: 390px;
    min-height: 100vh;
    background-color: #000;

    .content-container {
        position: relative;
        padding-bottom: calc(100% / 358 * 358);
        width: 100%;

        @media (min-width: 576px) {
            padding-bottom: calc(576px / 358 * 358);
            width: 576px;
        }
    }
}
</style>

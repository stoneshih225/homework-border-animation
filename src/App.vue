<script setup lang="ts">
import Box from './components/Box/Box.vue';
import Button from './components/Button/Button.vue';
import Radio from './components/Radio/Radio.vue';
import controllerConfig from './controllerConfig';
</script>

<template>
    <div class="app">
        <div class="content-container">
            <Box />
        </div>
        <div class="controller-container">
            <Button :buttonList="controllerConfig.buttonList" />
            <Radio :radioList="controllerConfig.radioList" />
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

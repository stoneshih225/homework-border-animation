<script setup lang="ts">
import { onMounted } from 'vue';
import floatingStarsCanvas from '@/animation/index';

onMounted(() => {
    const floatingStarsCanvasEl = document.getElementById('floatingStarsCanvas');

    floatingStarsCanvas(floatingStarsCanvasEl as HTMLCanvasElement);
});
</script>

<template>
    <div class="floating-stars-wrap">
        <canvas
            id="floatingStarsCanvas"
            class="floating-stars-canvas"
        />
    </div>
</template>

<style lang="scss" scoped>
.floating-stars-wrap {
    position: absolute;
    bottom: 5%;
    left: 50%;
    width: 65%;
    height: 65%;
    z-index: 2;
    pointer-events: none;
    transform: translateX(-50%);

    .floating-stars-canvas {
        width: 100%;
        height: 100%;
    }
}
</style>

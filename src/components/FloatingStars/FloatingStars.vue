<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Application } from 'pixi.js';
import floatingStarsCanvas from '@/animation/index';

const floatingStarsCanvasDom = ref<HTMLCanvasElement | null>(null);
let app: Application | null = null;

onMounted(() => {
    if (floatingStarsCanvasDom.value) {
        app = floatingStarsCanvas(floatingStarsCanvasDom.value);
    }
});
onBeforeUnmount(() => {
    if (app) {
        app.destroy(true, { children: true });
        app = null;
    }
});
</script>

<template>
    <div class="floating-stars-wrap">
        <canvas
            ref="floatingStarsCanvasDom"
            class="floating-stars-canvas"
        />
    </div>
</template>

<style lang="scss" scoped>
.floating-stars-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;

    .floating-stars-canvas {
        width: 100%;
        height: 100%;
    }
}
</style>

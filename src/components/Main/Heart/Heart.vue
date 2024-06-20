<script setup lang="ts">
import { PropType } from 'vue';
import HeartIcon from './SVG/HeartIcon.vue';

const props = defineProps({
    shapeList: {
        type: Array as PropType<{ id: string; name: string; }[]>,
        required: true
    },
    layoutStyle: {
        type: String,
        required: true
    },
    mode: {
        type: [String, Array] as PropType<'All' | number[]>,
        required: true
    }
});
</script>

<template>
    <div
        v-for="(heart, idx) in props.shapeList"
        :key="heart.id"
        class="heart-container"
        :class="[
            props.layoutStyle,
            { 'border-animation': props.mode === 'All' ? true : props.mode.includes(idx) }
        ]"
    >
        <HeartIcon class="heart-border" />
        <HeartIcon class="heart" />
    </div>
</template>

<style lang="scss" scoped>
@import "./Heart";
</style>

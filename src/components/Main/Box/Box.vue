<script setup lang="ts">
import { PropType } from 'vue';

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
        v-for="(box, idx) in props.shapeList"
        :key="box.id"
        class="box"
        :class="[
            props.layoutStyle,
            { 'border-animation': props.mode === 'All' ? true : props.mode.includes(idx) }
        ]"
    />
</template>

<style lang="scss" scoped>
@import "./Box";
</style>

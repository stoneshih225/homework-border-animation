<script setup lang="ts">
import { PropType, computed } from 'vue';
import getUuid from '@/utils/getUuid';
import generateUniqueNumbers from '@/utils/generateUniqueNumbers';

const props = defineProps({
    layout: {
        type: Number as PropType<1 | 3 | 5 | 10>,
        required: true
    },
    animationMode: {
        type: String as PropType<'All' | 'Random'>,
        required: true
    }
});

const boxList = computed(() => {
    const length = props.layout ** 2; // 1x1, 3x3, 5x5, 10x10...
    const array = Array.from({ length }, (_, idx) => ({
        id: getUuid(),
        name: `box-${idx + 1}`
    }));

    return array;
});

const layoutStyleMap = {
    3: 'layout-3',
    5: 'layout-5',
    10: 'layout-10'
};
const layoutStyle = computed(
    () => layoutStyleMap[props.layout as keyof typeof layoutStyleMap] || ''
);

const mode = computed(() => {
    const { animationMode, layout } = props;

    if (animationMode === 'All') return 'All';
    return generateUniqueNumbers(layout, 0, (layout ** 2) - 1);
});
</script>

<template>
    <div class="box-wrap">
        <div
            v-for="(box, idx) in boxList"
            :key="box.id"
            class="box"
            :class="[
                layoutStyle,
                { 'border-animation': mode === 'All' ? true : mode.includes(idx) }
            ]"
        />
    </div>
</template>

<style lang="scss" scoped>
@import "./Box";
</style>

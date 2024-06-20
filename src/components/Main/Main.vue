<script setup lang="ts">
import { PropType, computed } from 'vue';
import getUuid from '@/utils/getUuid';
import generateUniqueNumbers from '@/utils/generateUniqueNumbers';
// import Box from './Box/Box.vue';
import Heart from './Heart/Heart.vue';

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

const shapeList = computed(() => {
    const length = props.layout ** 2; // 1x1, 3x3, 5x5, 10x10...
    const array = Array.from({ length }, (_, idx) => ({
        id: getUuid(),
        name: `shape-${idx + 1}`
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
    <div class="main-wrap">
        <!-- <Box
            :shapeList="shapeList"
            :layoutStyle="layoutStyle"
            :mode="mode"
        /> -->
        <Heart
            :shapeList="shapeList"
            :layoutStyle="layoutStyle"
            :mode="mode"
        />
    </div>
</template>

<style lang="scss" scoped>
.main-wrap {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    gap: 1%;
}
</style>

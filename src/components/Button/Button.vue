<script setup lang="ts">
import { PropType } from 'vue';
import { ButtonList } from '@/controllerConfig';

const props = defineProps({
    buttonList: {
        type: Array as PropType<ButtonList[]>,
        required: true
    },
    layout: {
        type: Number as PropType<1 | 3 | 5 | 10>,
        required: true
    }
});
const emits = defineEmits(['update:layout']);

const pickedLayout = (layout: 1 | 3 | 5 | 10) => {
    if (props.layout === layout) return;

    emits('update:layout', layout);
};
</script>

<template>
    <div class="button-container">
        <button
            v-for="btn in props.buttonList"
            :key="btn.id"
            @click="pickedLayout(btn.layout)"
            class="button-mode"
        >
            {{ btn.name }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.button-container {
    margin-bottom: 1rem;

    .button-mode {
        position: relative;
        margin-right: 0.5rem;
    }
}
</style>

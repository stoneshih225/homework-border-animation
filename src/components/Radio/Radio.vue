<script setup lang="ts">
import { PropType, computed } from 'vue';
import { RadioList } from '@/controllerConfig';

const props = defineProps({
    radioList: {
        type: Array as PropType<RadioList[]>,
        required: true
    },
    animationMode: {
        type: String as PropType<'All' | 'Random'>,
        required: true
    }
});
const emits = defineEmits(['update:animationMode']);

const pickedAnimationMode = computed({
    get: () => props.animationMode,
    set: (mode) => {
        emits('update:animationMode', mode);
    }
});
</script>

<template>
    <div class="radio-container">
        <label
            v-for="radio in props.radioList"
            :key="radio.id"
            :for="radio.name"
            class="radio"
        >
            <input
                type="radio"
                :id="radio.name"
                :value="radio.name"
                v-model="pickedAnimationMode"
            />
            <span>{{ radio.name }}</span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.radio-container {
    position: relative;
    display: flex;

    .radio {
        margin-right: 0.5rem;
        color: #fff;
    }
}
</style>

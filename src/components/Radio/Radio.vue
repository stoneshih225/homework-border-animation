<script setup lang="ts">
import { PropType, computed } from 'vue';
import { RadioList } from '@/controllerConfig';

const props = defineProps({
    radioList: {
        type: Array as PropType<RadioList[]>,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});
const emits = defineEmits(['update:value']);

const pickedValue = computed({
    get: () => props.value,
    set: (value) => {
        emits('update:value', value);
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
                v-model="pickedValue"
            />
            <span>{{ radio.name }}</span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.radio-container {
    position: relative;
    display: flex;
    margin-bottom: 1rem;

    .radio {
        margin-right: 0.5rem;
        color: #fff;
    }
}
</style>

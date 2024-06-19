<script setup lang="ts">
import { PropType } from 'vue';
import { RadioList } from '@/controllerConfig';

const props = defineProps({
    radioList: {
        type: Array as PropType<RadioList[]>,
        required: true
    }
});
</script>

<template>
    <div class="radio-container">
        <div
            v-for="radio in props.radioList"
            :key="radio.id"
            class="radio"
        >
            <input
                type="radio"
                :id="radio.name"
            />
            <label :for="radio.name">{{ radio.name }}</label>
        </div>
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

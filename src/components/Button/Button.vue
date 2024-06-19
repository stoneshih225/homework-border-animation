<script setup lang="ts">
import { PropType } from 'vue';
import { ButtonList } from '@/controllerConfig';

const props = defineProps({
    buttonList: {
        type: Array as PropType<ButtonList[]>,
        required: true
    }
});
</script>

<template>
    <div class="button-container">
        <button
            v-for="btn in props.buttonList"
            :key="btn.id"
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

<script setup lang="ts">
import { clsx } from 'clsx'

const props = defineProps({
  disabled: {
    type: Boolean,
  },
})

const emit = defineEmits<{
  (event: 'click'): void
}>()

function handleClick() {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<template>
  <button
    type="button"
    @click="handleClick"
    :class="
      clsx(
        'font-medium border rounded-lg text-sm px-5 py-2.5 text-white bg-primary-400 dark:bg-primary-500',
        !disabled &&
          'text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:ring-4 focus:outline-none cursor-pointer',
        disabled && 'cursor-not-allowed',
      )
    "
  >
    <slot></slot>
  </button>
</template>

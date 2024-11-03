<script setup lang="ts">
import { clsx } from "clsx"

defineProps({
  label: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const model = defineModel({ type: Boolean, required: true })
</script>

<template>
  <label :class="clsx('inline-flex items-center w-min whitespace-nowrap', !disabled && 'cursor-pointer', disabled && 'cursor-not-allowed')">
    <input v-model="model" type="checkbox" class="sr-only peer" :disabled="disabled" />
    <div
      class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-200 dark:peer-focus:ring-primary-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-500"
    ></div>
    <span
      v-if="label"
      :class="
        clsx(
          'ms-3 text-sm font-medium',
          !disabled && 'text-gray-900 dark:text-gray-300 cursor-pointer',
          disabled && 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
        )
      "
    >{{ label }}</span
    >
  </label>
</template>

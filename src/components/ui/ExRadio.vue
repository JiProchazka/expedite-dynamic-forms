<script setup lang="ts">
import { clsx } from "clsx"
import useHtmlId from '@/composables/useHtmlId'

defineProps({
  label: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const model = defineModel({ type: String, required: true })

const { htmlId } = useHtmlId()
const id = htmlId()
</script>

<template>
  <div class="flex items-center">
    <input
      v-bind-once="{ id }"
      v-model="model"
      type="radio"
      :value="value"
      :name="group"
      :disabled="disabled"
      :class="
        clsx(
          'w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
          !disabled && 'cursor-pointer',
          disabled && 'cursor-not-allowed'
        )
      "
    />
    <label
      v-bind-once="{ for: id }"
      :class="
        clsx(
          'ms-2 text-sm font-medium',
          !disabled && 'text-gray-900 dark:text-gray-300 cursor-pointer',
          disabled && 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
        )
      "
    >
      {{ label }}
    </label>
  </div>
</template>

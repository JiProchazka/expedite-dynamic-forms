<script setup lang="ts">
import { clsx } from 'clsx'

defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  error: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <label
    v-if="label"
    v-bind-once="{ for: id }"
    :class="
      clsx(
        'block mb-2 text-sm font-medium whitespace-nowrap',
        !error && 'text-gray-900 dark:text-white',
        error && 'text-error-700 dark:text-error-500',
      )
    "
    >{{ label }}<span v-if="required"> *</span></label
  >
</template>

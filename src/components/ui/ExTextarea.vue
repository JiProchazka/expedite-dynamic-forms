<script setup lang="ts">
import { clsx } from "clsx"
import ExInputError from '@/components/ui/ExInputError.vue'
import ExInputLabel from '@/components/ui/ExInputLabel.vue'
import useHtmlId from '@/composables/useHtmlId'

defineProps({
  label: {
    type: String
  },
  placeholder: {
    type: String
  },
  error: {
    type: String,
    required: false
  },
  rows: {
    type: Number,
    default: 4
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  resizable: {
    type: Boolean,
    default: true
  }
})

const model = defineModel({ type: String, required: true })

const { htmlId } = useHtmlId()
const id = htmlId()
</script>

<template>
  <div>
    <ExInputLabel :id="id" :label="label" :error="error" :required="required" />
    <textarea
      v-bind-once="{ id }"
      v-model="model"
      :rows="rows"
      :class="
        clsx(
          'block p-2.5 w-full text-sm rounded-lg border',
          !disabled &&
            !error &&
            'text-gray-900 bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
          disabled && 'bg-gray-100 cursor-not-allowed dark:text-gray-400 dark:focus:border-primary-500',
          error &&
            'bg-error-50 border-error-500 text-error-700 placeholder:text-error-700 focus:ring-error-500 focus:border-error-500 dark:text-error-500 dark:placeholder-error-500 dark:border-error-500',
          !resizable && 'resize-none'
        )
      "
      :placeholder="placeholder || label"
      :disabled="disabled"
    ></textarea>
    <ExInputError :error="error" />
  </div>
</template>

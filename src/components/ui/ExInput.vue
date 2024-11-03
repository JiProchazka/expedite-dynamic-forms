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
  required: {
    type: Boolean,
    default: false
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
  <div>
    <ExInputLabel :id="id" :label="label" :error="error" :required="required" />
    <input
      type="text"
      v-bind-once="{ id }"
      v-model="model"
      :disabled="disabled"
      :class="
        clsx(
          'border text-sm rounded-lg block w-full p-2.5 outline-none focus:ring-1',
          !disabled &&
            !error &&
            'dark:bg-gray-700 placeholder:text-gray-400 bg-gray-50 dark:text-white dark:focus:border-primary-50 border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500',
          disabled &&
            'bg-gray-100 cursor-not-allowed dark:text-gray-400 dark:focus:border-primary-500',
          error &&
            'bg-error-50 border-error-500 text-error-700 placeholder:text-error-700 focus:ring-error-500 focus:border-error-500 dark:text-error-500 dark:placeholder-error-500 dark:border-error-500',
        )
      "
      :placeholder="placeholder || label"
    />
    <ExInputError :error="error" />
  </div>
</template>

<script setup lang="ts">
import { clsx } from "clsx"
import type { PropType } from "vue"
import type { Option } from "@/types/Option"
import ExInputError from '@/components/ui/ExInputError.vue'
import ExInputLabel from '@/components/ui/ExInputLabel.vue'
import useHtmlId from '@/composables/useHtmlId'

defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true
  },
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
    <ExInputLabel :id="id" :required="required" :label="label" :error="error" />
    <select
      v-bind-once="{ id }"
      v-model="model"
      :class="
        clsx(
          'border text-sm rounded-lg block w-full p-2.5 appearance-none',
          !disabled && 'cursor-pointer',
          !disabled &&
            !error &&
            'bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500',
          disabled && 'bg-gray-100 dark:text-gray-400 dark:focus:border-primary-500 cursor-not-allowed',
          error &&
            'bg-error-50 border-error-500 text-error-700 placeholder-error-700 focus:ring-error-500 focus:border-error-500 dark:text-error-500 dark:placeholder-error-500 dark:border-error-500',
          !model && !error && 'text-gray-400',
          !!model && !error && 'text-gray-900 dard:text-white'
        )
      "
      :disabled="disabled"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
  </div>
  <ExInputError :error="error" />
</template>

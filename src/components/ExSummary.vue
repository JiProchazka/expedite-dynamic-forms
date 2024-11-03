<script setup lang="ts">
import type { PropType } from 'vue'
import type { Template } from '@/types/dynamic-form/Template'
import ExInputLabel from '@/components/ui/ExInputLabel.vue'

defineProps({
  model: {
    type: Object,
    required: true
  },
  template: {
    type: Object as PropType<Template>,
    required: true
  },
})

function formatValue(value: unknown) {
  if (value === null || value === undefined) {
    return "-"
  }

  if (typeof value === 'boolean') {
    return value ? "Yes" : "No"
  }
  return value
}
</script>

<template>
  <div class="lg:w-1/3 flex flex-col gap-y-4 lg:pl-10">
    <h2 class="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Summary</h2>
    <div class="flex flex-col gap-y-4">
      <template v-for="field in template.form.fields" :key="field.name">
        <div>
          <ExInputLabel :label="field.label" />
          <p class="tracking-tighter text-gray-500 dark:text-gray-400">{{ formatValue(model[field.name]) }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

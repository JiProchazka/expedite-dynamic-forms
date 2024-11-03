<script setup lang="ts">
import type { PropType } from 'vue'
import type { Template } from '@/types/dynamic-form/Template'
import ExButton from '@/components/ui/ExButton.vue'
import useDynamicForm from '@/composables/useDynamicForm'

const props = defineProps({
  template: {
    type: Object as PropType<Template>,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

const model = defineModel({ type: Object, required: true })
const emit = defineEmits<{
  (e: 'submit', value: object): void
}>()

const { constructForm } = useDynamicForm()
const formFields = constructForm(props.template)

function handleSubmit() {
  emit('submit', model.value)
}
</script>

<template>
  <form class="flex flex-col gap-y-4 w-2/3 border-r border-gray-200 pr-10">
    <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ template.title }}</h1>
    <component v-for="field in formFields" :key="field.name" :is="field.component" v-bind="field.props" v-model="model[field.name]" :disabled="isLoading" />
    <ExButton @click="handleSubmit" :is-loading="isLoading">{{ template.button }}</ExButton>
  </form>
</template>

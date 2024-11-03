<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ExCard from '@/components/ui/ExCard.vue'
import ExDynamicForm from '@/components/ExDynamicForm.vue'
import ExNotifications from '@/components/ui/ExNotifications.vue'
import ExSummary from '@/components/ExSummary.vue'
import ExSpinner from '@/components/ui/ExSpinner.vue'
import type { Template } from '@/types/dynamic-form/Template'
import { useNotifications } from '@/composables/useNotifications'
import { useTemplate } from '@/composables/useTemplate'
import useDynamicForm from '@/composables/useDynamicForm'
import useFakeApi from '@/composables/useFakeApi'
import useValidation from '@/composables/useValidation'

const notif = useNotifications()
const isLoading = ref(false)
const { getEmptyModel, getValidationSchema } = useDynamicForm()
const { saveData } = useFakeApi()
// const { fakeError } = useFakeApi() // Uncomment this line to simulate API error
// const { loadData } = useFakeApi() // Uncomment this line to load data from the fake API
const template = ref<Template | null>(null)
const model = ref<object | null>(null)
const schema = ref<Record<string, any> | null>(null)
const { isValid, errors, validate } = useValidation()

onMounted(async () => {
  const { data: templateData } = await useTemplate()
  template.value = templateData
  model.value = getEmptyModel(template.value)
  schema.value = getValidationSchema(template.value)
  // Uncomment following two lines to load data from the fake API
  // const { data: formData } = await loadData()
  // model.value = formData
})

async function handleSubmit(form: object) {
  isLoading.value = true
  try {
    await validate(form, schema.value)
    if (isValid.value === false) {
      return
    }
    // Uncomment following line to simulate API error
    // await fakeError(form)
    await saveData(form)
    model.value = getEmptyModel(template.value!)
    notif.success('Form submitted successfully!')
  } catch {
    notif.error('Failed to submit the form!')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex justify-center items-center p-6 md:p-0 md:pt-6">
    <ExCard class="md:w-5/6">
      <div class="flex">
        <template v-if="template && model">
          <div class="w-full md:w-2/3 md:border-r md:border-gray-200 md:pr-10">
          <ExDynamicForm
            v-model="model"
            :template="template"
            :is-loading="isLoading"
            :errors="errors"
            @submit="handleSubmit" />
          </div>
          <div class="hidden md:block">
            <ExSummary :template="template" :model="model" />
          </div>
        </template>
        <div v-else class="w-full flex items-center justify-center">
          <ExSpinner />
        </div>
      </div>
    </ExCard>
    <ExNotifications />
  </div>
</template>

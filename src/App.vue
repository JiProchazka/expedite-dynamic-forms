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

const notif = useNotifications()
const isLoading = ref(false)
const { getEmptyModel } = useDynamicForm()
const { saveData } = useFakeApi()
// const { fakeError } = useFakeApi() // Uncomment this line to simulate API error
// const { loadData } = useFakeApi() // Uncomment this line to load data from the fake API
const template = ref<Template | null>(null)
const model = ref<object | null>(null)

onMounted(async () => {
  const { data: templateData } = await useTemplate()
  template.value = templateData
  model.value = getEmptyModel(template.value)
  // Uncomment following two lines to load data from the fake API
  // const { data: formData } = await loadData()
  // model.value = formData
})

async function handleSubmit(form: object) {
  isLoading.value = true
  try {
    // Uncomment following line to simulate API error
    // await fakeError(form)
    await saveData(form)
    notif.success('Form submitted successfully!')
  } catch {
    notif.error('Failed to submit the form!')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex justify-center items-center p-6 lg:p-0 lg:pt-6">
    <ExCard class="lg:w-5/6">
      <div class="flex">
        <template v-if="template && model">
          <ExDynamicForm :template="template" v-model="model" @submit="handleSubmit" :is-loading="isLoading" />
          <ExSummary :model="model" />
        </template>
        <div v-else class="w-full flex items-center justify-center">
          <ExSpinner />
        </div>
      </div>
    </ExCard>
    <ExNotifications />
  </div>
</template>

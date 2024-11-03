<script setup lang="ts">
import { ref } from 'vue'
import ExButton from '@/components/ui/ExButton.vue'
import ExCard from '@/components/ui/ExCard.vue'
import ExInput from '@/components/ui/ExInput.vue'
import ExNotifications from '@/components/ui/ExNotifications.vue'
import ExRadio from '@/components/ui/ExRadio.vue'
import ExSelect from '@/components/ui/ExSelect.vue'
import ExTextarea from '@/components/ui/ExTextarea.vue'
import ExToggle from '@/components/ui/ExToggle.vue'
import { useNotifications } from '@/composables/useNotifications'

const notif = useNotifications()

const message = ref('Hello World!')
const toggle = ref(false)
const radio = ref('yes')
const city = ref("prague")

const options = [
  { name: 'New York', value: 'new-york' },
  { name: 'Prague', value: 'prague' },
  { name: 'London', value: 'london' },
]

function handleSubmit() {
  notif.success('Form submitted!')
}
</script>

<template>
  <div class="flex justify-center items-center py-12">
    <ExCard title="Form" class="w-1/2">
      <div class="flex flex-col gap-y-4">
        <ExInput v-model="message" label="Name" />
        <ExTextarea v-model="message" label="Message" :resizable="false" />
        <ExToggle v-model="toggle" label="Toggle Me!" />
        <ExRadio v-model="radio" group="question" label="Yes" value="yes" />
        <ExRadio v-model="radio" group="question" label="No" value="no" />
        <ExSelect :options="options" v-model="city" label="City" />
        <ExButton @click="handleSubmit">Click Me!</ExButton>
      </div>
    </ExCard>
    <ExNotifications />
  </div>
</template>

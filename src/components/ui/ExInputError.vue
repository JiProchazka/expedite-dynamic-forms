<script setup lang="ts">
import ExFadeTransition from '@/components/utils/ExFadeTransition.vue'

defineProps({
  error: {
    type: String,
  },
})
</script>

<template>
  <ExFadeTransition>
    <p
      v-if="error"
      class="mt-1.5 ml-1 text-sm text-error-600 dark:text-error-500 font-medium"
    >
      {{ error }}
    </p>
  </ExFadeTransition>
</template>

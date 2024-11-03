<script setup lang="ts">
defineProps({
  model: Object
})
</script>

<template>
  <div class="lg:w-1/3 flex flex-col gap-y-4 lg:pl-10">
    <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Summary</h2>
    <div>{{ model }}</div>
  </div>
</template>

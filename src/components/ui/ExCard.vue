<script setup lang="ts">
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <div class="w-full block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <h1 v-if="title" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h1>
    <div class="font-normal text-gray-700 dark:text-gray-400">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>

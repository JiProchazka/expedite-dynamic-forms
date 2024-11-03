<script setup lang="ts">
import ExNotification from '@/components/ui/ExNotification.vue'
import { useNotifications } from "@/composables/useNotifications"

const notifications = useNotifications()
</script>

<template>
  <div class="absolute bottom-5 right-5 z-50 flex flex-col-reverse gap-y-2">
    <ExNotification
      v-for="notification in notifications.notifications"
      @close="notifications.remove(notification.id)"
      :key="notification.id"
      :id="notification.id"
      :message="notification.message"
      :type="notification.type"
    />
  </div>
</template>

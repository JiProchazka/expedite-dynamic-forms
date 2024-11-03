import { defineStore } from "pinia"
import type { Notification } from "@/types/ui/Notification"

const DURATION = 2000

export const useNotifications = defineStore("notifications", {
  state: () => {
    return {
      notifications: [] as Notification[]
    }
  },
  actions: {
    success(message: string) {
      const id = Math.random().toString(36)

      this.notifications.push({ id, message, type: "success" })
      setTimeout(() => {
        this.remove(id)
      }, DURATION)
    },
    error(message: string) {
      const id = Math.random().toString(36)

      this.notifications.push({ id, message, type: "error" })
      setTimeout(() => {
        this.remove(id)
      }, DURATION)
    },
    warning(message: string) {
      const id = Math.random().toString(36)

      this.notifications.push({ id, message, type: "warning" })
      setTimeout(() => {
        this.remove(id)
      }, DURATION)
    },
    remove(id: string) {
      const index = this.notifications.findIndex((notification: Notification) => notification.id === id)
      this.notifications.splice(index, 1)
    }
  }
})

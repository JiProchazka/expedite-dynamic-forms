import { nanoid } from "nanoid"

export default function useHtmlId() {
  return { htmlId: nanoid }
}

import type { Template } from "@/types/dynamic-form/Template"
import type { FormField } from '@/types/ui/FormField'
import type { Field } from '@/types/dynamic-form/Field'
import ExToggle from '@/components/ui/ExToggle.vue'
import ExInput from '@/components/ui/ExInput.vue'
import ExSelect from '@/components/ui/ExSelect.vue'
import ExSpinner from '@/components/ui/ExSpinner.vue'
import ExTextarea from '@/components/ui/ExTextarea.vue'

export default function useDynamicForm() {
  function constructForm(template: Template): FormField[] {
    const arr: FormField[] = []
    template.form.fields.forEach((field) => {
      arr.push({
        name: field.name,
        component: getComponent(field.type),
        props: getProps(field)
      })
    })

    return arr
  }

  function getEmptyModel(template: Template) {
    const model: Record<string, unknown> = {}
    template.form.fields.forEach((field) => {
      model[field.name] = field.defaultValue || getDefaultValue(field.type)
    })

    return model
  }

  return { constructForm, getEmptyModel }
}

function getComponent(type: string) {
  switch (type) {
    case 'switch':
      return ExToggle
    case 'text':
      return ExInput
    case 'select':
      return ExSelect
    case 'textarea':
      return ExTextarea
    default:
      return ExSpinner
  }
}

function getDefaultValue(type: string) {
  switch (type) {
    case 'text':
    case 'select':
    case 'textarea':
      return ''
    case 'switch':
      return false
    default:
      return ''
  }
}

function getProps(field: Field) {
  switch (field.type) {
    case 'switch':
      return {
        label: field.label
      }
    case 'text':
      return {
        label: field.label,
        placeholder: field.label
      }
    case 'select':
      return {
        label: field.label,
        placeholder: field.label,
        options: field.options
      }
    case 'textarea':
      return {
        label: field.label,
        placeholder: field.label,
        rows: field.rows
      }
    default:
      return {}
  }
}

import { ref } from 'vue';
import * as yup from 'yup';

export default function useValidation() {
  const isValid = ref(true);
  const errors = ref<Record<string, string | undefined>>({});

  async function validate(model: any, schema: any) {
    isValid.value = true;
    errors.value = {};
    try {
      await schema.validate(model, { abortEarly: false });
      isValid.value = true;
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        isValid.value = false;
        // Collect validation errors
        err.inner.forEach((error) => {
          if (error.path) {
            errors.value[error.path] = error.message;
          }
        });
      }
    }
  }

  return { isValid, errors, validate };
}

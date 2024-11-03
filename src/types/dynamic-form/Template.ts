import type { Field } from '@/types/dynamic-form/Field'

export type Template = {
  title: string;
  button: string;
  form: {
    fields: Field[];
  };
};

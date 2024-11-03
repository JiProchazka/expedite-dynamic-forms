import template from '@/data/template.json';
import type { Template } from '@/types/dynamic-form/Template'

// immitating http call
export async function useTemplate(): Promise<{ data: Template }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: template as Template });
    }, 1000);
  });
}

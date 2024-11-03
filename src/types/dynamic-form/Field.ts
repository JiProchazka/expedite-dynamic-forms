import type { FieldType } from "@/types/dynamic-form/FieldType";
import type { Option } from "@/types/dynamic-form/Option";
import type { UuId } from "@/types/dynamic-form/UuId";
import type { Validations } from "@/types/dynamic-form/Validations";

export type Field = UuId & {
  type: FieldType;
  name: string;
  label: string;
  validations: Validations;
  group?: string;
  options?: Option[];
  value?: string;
  defaultValue?: string;
  rows?: number;
};

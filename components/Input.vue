<script lang="ts" setup>
import { helperTextClasses, inputClasses, labelClasses } from "./Input.utils";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  helperText: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  testId: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
const modelValue = useSyncProps<string>(props, "modelValue", emit);
</script>

<template>
  <div class="relative flex flex-col w-full">
    <input
      :name="name"
      :data-testid="testId"
      :type="type"
      :disabled="disabled"
      :class="inputClasses"
      :placeholder="placeholder"
      :data-invalid="invalid"
      :data-disabled="disabled"
      v-model="modelValue"
    />
    <label
      :class="labelClasses"
      :data-invalid="invalid"
      :data-disabled="disabled"
      >{{ label }}
    </label>
    <p
      :class="helperTextClasses"
      :data-invalid="invalid"
      :data-disabled="disabled"
    >
      {{ helperText }}
    </p>
  </div>
</template>

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

const inputId = `input-${Math.random().toString(36).slice(2)}`;
</script>

<template>
  <div>
    <div class="relative">
      <input
        :id="inputId"
        :name="name"
        v-model="modelValue"
        :type="type"
        :disabled="disabled"
        :class="inputClasses"
        :data-invalid="invalid"
        :data-disabled="disabled"
        :data-testid="testId"
        placeholder=" "
      />
      <label
        :for="inputId"
        :class="labelClasses"
        :data-invalid="invalid"
        :data-disabled="disabled"
        >{{ label }}
      </label>
    </div>
    <p
      :class="helperTextClasses"
      :data-invalid="invalid"
      :data-disabled="disabled"
    >
      {{ helperText }}
    </p>
  </div>
</template>

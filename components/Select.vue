<script lang="ts" setup>
import { inputClasses, labelClasses } from "./Input.utils";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  options: {
    type: Array as () => { label: string; value: string }[],
    default: () => [],
  },
  modelValue: {
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

const handleSelectChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
};

const arrowClasses = [
  "absolute",
  "top-1/2",
  "right-4",
  "transform",
  "-translate-y-1/2",
  "text-gray-200",
  "pointer-events-none",
  "stroke-gray-200",
  "data-[invalid=true]:text-error",
  "data-[invalid=true]:stroke-error",
  "data-[disabled=true]:stroke-gray-400",
];
</script>

<template>
  <div class="relative flex w-full">
    <label
      :for="label"
      :data-disabled="disabled"
      :data-invalid="invalid"
      :class="labelClasses"
    >
      {{ label }}
    </label>

    <select
      id="select"
      name="select"
      :data-testid="testId"
      :class="inputClasses"
      :data-disabled="disabled"
      :data-invalid="invalid"
      v-model="modelValue"
      @change="handleSelectChange"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <svg
      :class="arrowClasses"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="stroke-gray-200"
        d="M6 8.99951L12 14.9995L18 8.99951"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

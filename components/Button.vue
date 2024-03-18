<script lang="ts" setup>
import { twJoin, twMerge } from "tailwind-merge";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  variant: {
    type: String,
    default: "primary",
  },
  testId: {
    type: String,
    default: "",
  },
});

const styles = reactive<{
  [key: string]: string;
}>({
  primary:
    "text-night-violet bg-plum-purple hover:bg-plum-purple-lighter-100 focus:bg-plum-purple-lighter-100 active:bg-plum-purple-darker-100",
  secondary:
    "text-night-violet bg-almost-white hover:bg-almost-white-lighter-200",
});

const selectedStyle = computed(() =>
  props.variant in styles ? styles[props.variant] : styles.primary
);

const defaultStyle = `font-normal transition-colors duration-300 ease-in-out inline-flex items-center justify-center
 rounded-full py-3 px-8 focus:outline-none focus:outline-0 ${selectedStyle.value}
`;

const computedStyles = computed(() => {
  return twMerge(
    twJoin(
      defaultStyle,
      props.disabled ? "bg-gray-400 text-gray-300 pointer-events-none" : ""
    )
  );
});
</script>

<template>
  <NuxtLink
    :data-testid="testId"
    v-if="to"
    tag="a"
    :to="to"
    :class="`${computedStyles}`"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
  <button
    v-else
    :data-testid="testId"
    :class="`${computedStyles}`"
    @click="$emit('click')"
    :aria-disabled="props.disabled"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

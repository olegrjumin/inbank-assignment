<template>
  <div class="relative w-full" :data-testid="testId">
    <SliderComponent
      :modelValue="modelValue"
      @update:modelValue="updateValue"
      class="w-full"
      :min="min"
      :max="max"
      :step="step"
    />
    <span class="text-sm text-night-violet/[0.6] absolute start-0 -bottom-9"
      >{{ min }} {{ suffix }}</span
    >
    <span class="text-sm text-night-violet/[0.6] absolute end-0 -bottom-9"
      >{{ max }} {{ suffix }}</span
    >
  </div>
</template>

<script lang="ts">
import SliderComponent from "@vueform/slider";

export default defineComponent({
  components: {
    SliderComponent,
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    suffix: {
      type: String,
      default: "",
    },
    testId: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(value: number) {
      this.$emit("update:modelValue", value.toString());
    },
  },
});
</script>
<style src="@vueform/slider/themes/default.css"></style>

<style>
:root {
  --slider-bg: rgba(33, 9, 58, 0.1);
  --slider-connect-bg: #21093a;
}

.slider-connects,
.slider-base {
  border-radius: 0;
}

.slider-base {
  height: 4px;
  margin-left: 25px;
  margin-right: 25px;
  width: calc(100% - 50px);
}

.slider-base::before,
.slider-base::after {
  content: "";
  position: absolute;
  width: 25px;
  top: 0;
  height: 4px;
}

.slider-base::before {
  left: -25px;
  background: #21093a;
  border-top-left-radius: var(--slider-border-radius, 5px);
  border-bottom-left-radius: var(--slider-border-radius, 5px);
}

.slider-base::after {
  right: -25px;
  border-top-right-radius: var(--slider-border-radius, 5px);
  border-bottom-right-radius: var(--slider-border-radius, 5px);
  background: rgba(33, 9, 58, 0.1);
}

.slider-tooltip {
  display: none;
}

.slider-handle::after {
  content: "";
  -webkit-appearance: none;
  appearance: none;
  width: 53px;
  height: 36px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSItMC4wMDA0ODgyODEiIHdpZHRoPSI1MiIgaGVpZ2h0PSIzNiIgcng9IjE4IiBmaWxsPSIjQUE5M0ZGIi8+CjxwYXRoIGQ9Ik0yNC41IDE3Ljk5OTVMMTYuNSAxNy45OTk1IiBzdHJva2U9IiMyMTA5M0EiLz4KPHBhdGggZD0iTTIxLjUgMTIuOTk5NUwxNi41IDE3Ljk5OTVMMjEuNSAyMi45OTk1IiBzdHJva2U9IiMyMTA5M0EiLz4KPHBhdGggZD0iTTI4LjUgMTcuOTk5NUwzNi41IDE3Ljk5OTUiIHN0cm9rZT0iIzIxMDkzQSIvPgo8cGF0aCBkPSJNMzEuNSAxMi45OTk1TDM2LjUgMTcuOTk5NUwzMS41IDIyLjk5OTUiIHN0cm9rZT0iIzIxMDkzQSIvPgo8L3N2Zz4K)
    no-repeat;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>

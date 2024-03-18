<script lang="ts" setup>
const emit = defineEmits(["closeModal"]);
</script>

<template>
  <div
    class="fixed inset-0 bg-black/[0.50] flex justify-center items-end md:items-center z-50"
  >
    <div
      data-testid="modal"
      class="bg-white w-full md:w-auto relative botom-0 md:bottom-auto p-10 rounded-[30px] md:min-w-[540px]"
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">Personal Details</h2>
        <button @click="emit('closeModal')" data-testid="modalCloseButton">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

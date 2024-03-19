<script lang="ts" setup>
const isModalOpen = ref(false);
</script>
<template>
  <section>
    <div class="container mx-auto px-4 md:px-0 h-full">
      <div class="grid grid-cols-12 gap-x-6 pt-4">
        <div
          class="relative order-2 col-span-12 flex flex-col justify-center px-5 py-20 text-center lg:order-1 lg:col-span-5 lg:px-10 lg:py-0"
        >
          <svg
            class="absolute inset-0"
            width="100%"
            height="100%"
            viewBox="0 0 594 798"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.000502814 296L0 500C3.68466e-05 617.018 19.4535 686.397 65.0133 731.987C110.573 777.576 179.952 797 297 797C414.018 797 483.397 777.547 528.987 731.987C574.547 686.397 594 617.018 594 500V296C593.889 179.586 574.417 110.473 528.987 65.0133C483.397 19.4535 414.018 5.126e-06 297 0C179.982 -5.126e-06 110.603 19.4535 65.0133 65.0133C19.5538 110.473 0.111 179.557 0.000502814 296Z"
              class="fill-pale-khaki"
            ></path>
          </svg>
          <div
            class="relative text-center flex flex-col items-center justify-center"
          >
            <span class="font-medium">Mini loan</span>
            <h1 class="text-center text-6xl xl:text-8xl font-normal">
              <span><i>Take charge</i> of unexpected costs</span>
            </h1>
            <p class="mt-2 text-xs lg:text-base">
              Finance unforeseen expenses with Inbank. A quick and easy
              application process with an instant credit decision.
            </p>
            <div class="mt-5 flex items-center justify-center gap-x-6">
              <Button
                variant="secondary"
                data-testid="heroApplyNowButton"
                @click="isModalOpen = true"
                >Apply now</Button
              >
            </div>
            <Modal v-if="isModalOpen" @closeModal="isModalOpen = false">
              <PersonalDetailsForm />
            </Modal>
          </div>
        </div>

        <div class="order-1 col-span-12 pb-5 lg:order-2 lg:col-span-7 lg:pb-0">
          <NuxtImg
            width="840"
            height="839"
            class="w-full"
            src="/man-dog-laundry.png"
            alt="Man and dog doing laundry"
          />
        </div>
      </div>
    </div>
  </section>
</template>

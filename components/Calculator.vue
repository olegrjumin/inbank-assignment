<script lang="ts" setup>
import { useUserData } from "~/store";

import Slider from "./Slider.vue";

const { setUserData, userData } = useUserData();

const periods = Array.from({ length: 36 }, (_, i) => {
  return {
    label: `${i * 2 + 2} months`,
    value: `${i * 2 + 2}`,
  };
});

const calculateMonthlyPayment = (amount: string, period: string) => {
  return (parseInt(amount) / parseInt(period)).toFixed(2);
};

const selectedPeriod = ref("48");
const amount = ref("300");
const monthlyPayment = ref("0");
const isModalOpen = ref(false);

const isValidAmount = computed(() => {
  return parseInt(amount.value) >= 300 && parseInt(amount.value) <= 7200;
});

const onOpenModal = () => {
  isModalOpen.value = true;
};

watch([selectedPeriod, amount], ([period, amount]) => {
  monthlyPayment.value = calculateMonthlyPayment(amount, period);

  setUserData({
    ...userData,
    loanAmount: parseInt(amount),
    loanPeriod: parseInt(period),
    loanMonthlyPayment: monthlyPayment.value,
  });
});

onMounted(() => {
  monthlyPayment.value = calculateMonthlyPayment(
    amount.value,
    selectedPeriod.value
  );

  setUserData({
    ...userData,
    loanAmount: parseInt(amount.value),
    loanPeriod: parseInt(selectedPeriod.value),
    loanMonthlyPayment: monthlyPayment.value,
  });
});
</script>

<template>
  <section class="bg-light-lavender mt-[40px] lg:mt-[80px]">
    <div class="container mx-auto px-4 md:px-0">
      <div class="grid grid-cols-12 py-[40px] lg:py-[80px]">
        <div
          class="col-span-12 justify-center lg:col-span-6 border-none lg:border-solid lg:border-r lg:border-r-night-violet/[0.15]"
        >
          <div class="text-left lg:py-[72px] lg:px-[40px] lg:text-center">
            <h1 class="italic text-4xl xl:text-8xl">
              Calculate your monthly payment
            </h1>
            <p class="mt-4">
              Estimate your monthly payments based on the chosen loan amount and
              time period.
            </p>
          </div>
        </div>

        <div class="order-1 col-span-12 pb-5 lg:col-span-6">
          <div class="pt-10 lg:pt-0 lg:px-10 flex flex-col text-center">
            <div
              class="flex flex-col items-center lg:flex-row lg:space-y-0 lg:space-x-6 mb-20 lg:mb-12"
            >
              <Slider
                v-model="amount"
                :min="300"
                :max="7200"
                class="order-2 lg:order-1"
                suffix="€"
                testId="amountSlider"
              />

              <div class="w-full lg:w-auto order-1 lg:order-2 mb-6 lg:mb-0">
                <Input
                  testId="amountInput"
                  type="number"
                  name="amount"
                  label="Label"
                  placeholder="Placeholder"
                  v-model="amount"
                  :invalid="!isValidAmount"
                  :helper-text="!isValidAmount ? 'Invalid amount' : ''"
                />
              </div>
            </div>

            <div
              class="flex flex-col lg:flex-row lg:space-y-0 lg:space-x-6 items-center"
            >
              <Slider
                testId="periodSlider"
                v-model="selectedPeriod"
                :min="2"
                :max="72"
                :step="2"
                suffix="months"
                class="order-2 lg:order-1"
              />

              <div class="w-full lg:w-auto order-1 lg:order-2 mb-6 lg:mb-0">
                <Select
                  testId="periodSelect"
                  :options="periods"
                  label="Label"
                  v-model="selectedPeriod"
                />
              </div>
            </div>

            <p class="mt-14 lg:mt-12 mb-2">Monthly payment</p>
            <span
              v-if="isValidAmount"
              data-testid="calculatedMonthlyPayment"
              class="font-serif text-4xl xl:text-8xl leading-none"
              >{{ monthlyPayment }} €</span
            >
            <span v-else class="text-4xl xl:text-8xl leading-none">...</span>

            <div class="my-6">
              <Button
                test-id="calculatorApplyNowButton"
                @click="onOpenModal"
                :disabled="!isValidAmount"
                >Apply now</Button
              >

              <Modal v-if="isModalOpen" @closeModal="isModalOpen = false">
                <PersonalDetailsForm />
              </Modal>
            </div>
            <p class="info text-night-violet/[0.6]">
              The calculation is approximate and may differ from the conditions
              offered to you. Please submit a loan application to receive a
              personal offer. Financial services are provided by AS Inbank
              Finance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

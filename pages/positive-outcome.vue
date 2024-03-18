<script lang="ts" setup>
import { useUserData } from "~/store";
definePageMeta({
  layout: "outcome",
});
const router = useRouter();
const { userData, resetUserData } = useUserData();
const { loanAmount, loanMonthlyPayment, loanPeriod } = userData || {};

const handleBack = () => {
  resetUserData();
  router.push("/");
};
</script>
<template>
  <section>
    <div class="container mx-auto px-4 lg:px-0 h-full pt-10">
      <div
        class="lg:shadow-[0_0_40px_rgba(0,_0,_0,_0.04)] relative flex flex-col lg:flex-row text-base leading-6 lg:rounded-[20px] overflow-hidden max-w-[1200px] mx-auto min-h-[680px]"
      >
        <NuxtImg
          height="240"
          width="240"
          src="/good-news.png"
          class="block lg:hidden self-center w-full max-w-[240px]"
          alt="Good news"
        />

        <div
          class="hidden relative w-[50%] border-4 border-white left-0 top-0 rounded-bl-[20px] rounded-tl-[20px] bottom-0 bg-almost-white py-20 lg:flex items-center"
        >
          <NuxtImg
            width="552"
            height="520"
            src="/small-loan.png"
            class="relative h-[400px] lg:h-[450px] xl:h-[520px] lg:ml-24 z-10 size-full object-contain"
            alt="Good news"
          />
        </div>

        <div
          class="lg:px-28 lg:flex lg:flex-col justify-center items-center lg:w-[50%] lg:bg-white"
        >
          <h1
            class="mt-6 w-full text-[32px] leading-9 lg:text-[48px] lg:leading-[56px] text-center"
          >
            <i>Good</i> news!
          </h1>
          <p class="mt-2 w-full text-center">Your loan has been approved</p>
          <div class="mt-10 bg-night-violet/[0.15] w-full min-h-[1px]"></div>
          <div class="flex gap-4 py-3 w-full">
            <div class="w-2/3 font-medium">Loan amount</div>
            <div
              class="flex-auto whitespace-nowrap font-normal"
              data-testid="loanAmountValue"
            >
              {{ loanAmount }} €
            </div>
          </div>
          <div class="w-full bg-night-violet/[0.15] min-h-[1px]"></div>
          <div class="flex gap-4 py-3 w-full">
            <div class="w-2/3 font-medium">Loan period</div>
            <div
              class="flex-auto whitespace-nowrap font-normal"
              data-testid="loanPeriodValue"
            >
              {{ loanPeriod }} months
            </div>
          </div>
          <div class="w-full bg-night-violet/[0.15] min-h-[1px]"></div>
          <div class="flex gap-4 py-3 w-full">
            <div class="w-2/3 font-medium">Monthly payment</div>
            <div
              class="flex-auto whitespace-nowrap font-normal"
              data-testid="loanMonthlyPaymentValue"
            >
              {{ loanMonthlyPayment }} €
            </div>
          </div>
          <div class="w-full bg-night-violet/[0.15] min-h-[1px]"></div>
          <Button
            testId="exitButton"
            class="w-full mt-10"
            variant="primary"
            @click="handleBack"
          >
            Back to home page
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

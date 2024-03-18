<script lang="ts" setup>
import { useUserData } from "~/store";
definePageMeta({
  layout: "outcome",
});
const { userData, resetUserData } = useUserData();
const { name = "" } = userData || {};
const router = useRouter();

const handleBack = () => {
  resetUserData();
  router.push("/");
};
</script>
<template>
  <section>
    <div class="container mx-auto px-4 lg:px-0 h-full pt-10">
      <div
        class="lg:shadow-[0_0_40px_rgba(0,_0,_0,_0.04)] relative flex flex-col lg:flex-row text-base leading-6 lg:rounded-[20px] overflow-hidden max-w-[792px] mx-auto max-h-[450px] lg:bg-white"
      >
        <div
          class="lg:py-20 lg:flex lg:flex-col justify-center items-center lg:w-full max-w-[384px] mx-auto"
        >
          <h1
            class="mt-10 w-full text-[32px] leading-9 lg:text-[48px] lg:leading-[56px] text-center"
            data-testid="welcomeMessage"
          >
            <i>Dear</i> {{ name }}
          </h1>
          <p class="mt-2 w-full text-center">
            Unfortunately, your loan was denied.
          </p>
          <div class="mt-10 bg-night-violet/[0.15] w-full min-h-[1px]"></div>
          <div class="flex gap-4 py-3 w-full">
            <div
              class="text-center text-night-violet/[0.75] font-normal"
              data-testid="outcomeInfo"
            >
              In addition to your income and expenses, a number of other factors
              play a role in loan decisions
            </div>
          </div>
          <div class="w-full bg-night-violet/[0.15] min-h-[1px]"></div>

          <Button
            testId="exitButton"
            class="w-full mt-10"
            variant="primary"
            @click="handleBack"
          >
            Exit
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

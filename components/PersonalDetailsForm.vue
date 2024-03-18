<script lang="ts" setup>
import { useUserData } from "~/store";

const router = useRouter();

const errors = ref({
  name: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  monthlyIncome: "",
});

const name = ref("");
const lastName = ref("");
const phoneNumber = ref("");
const email = ref("");
const monthlyIncome = ref("");

const isNotEmpty = (value: string) => {
  return value.length > 0;
};

const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const validatePhoneNumber = (phoneNumber: string) => {
  const re = /^55\d{7,8}$/;
  return re.test(phoneNumber);
};
const validateMonthlyIncome = (monthlyIncome: string) => {
  return parseInt(monthlyIncome) > 100;
};

const { setUserData, userData } = useUserData();

const onSubmit = () => {
  errors.value.name = isNotEmpty(name.value) ? "" : "Name is required";
  errors.value.lastName = isNotEmpty(lastName.value)
    ? ""
    : "Last name is required";
  errors.value.phoneNumber = validatePhoneNumber(phoneNumber.value)
    ? ""
    : "Invalid phone number";
  errors.value.email = validateEmail(email.value) ? "" : "Invalid email";
  errors.value.monthlyIncome = validateMonthlyIncome(monthlyIncome.value)
    ? ""
    : "Monthly income must be greater than 100";

  if (Object.values(errors.value).every((error) => error === "")) {
    setUserData({
      ...userData,
      name: name.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      monthlyIncome: monthlyIncome.value,
    });
    if (parseInt(monthlyIncome.value) > 1000) {
      router.push("/positive-outcome");
    } else {
      router.push("/negative-outcome");
    }
  }
};
</script>

<template>
  <form>
    <div class="flex flex-col space-y-4">
      <Input
        label="First Name"
        name="name"
        class="w-full"
        v-model="name"
        :invalid="!!errors.name"
        :helper-text="errors.name"
      />

      <Input
        label="Last Name"
        name="lastName"
        v-model="lastName"
        :invalid="!!errors.lastName"
        :helper-text="errors.lastName"
      />
      <Input
        label="Mobile number"
        name="phoneNumber"
        v-model="phoneNumber"
        :invalid="!!errors.phoneNumber"
        :helper-text="errors.phoneNumber"
      />
      <Input
        label="E-mail"
        name="email"
        v-model="email"
        :invalid="!!errors.email"
        :helper-text="errors.email"
      />
      <Input
        label="Monthly income"
        name="monthlyIncome"
        v-model="monthlyIncome"
        :invalid="!!errors.monthlyIncome"
        :helper-text="errors.monthlyIncome"
      />
    </div>
    <Button
      test-id="submitButton"
      @click="onSubmit"
      variant="primary"
      type="button"
      class="w-full mt-6"
      >Submit</Button
    >
  </form>
</template>

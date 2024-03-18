type IUser = {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  monthlyIncome: string;
  loanAmount: number;
  loanPeriod: number;
  loanMonthlyPayment: string;
};

export const useUserData = defineStore(
  "userData",
  () => {
    const userData = reactive<IUser>({
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      monthlyIncome: "",
      loanAmount: 0,
      loanPeriod: 0,
      loanMonthlyPayment: "",
    });

    function setUserData(user: IUser) {
      Object.assign(userData, user);
    }

    function resetUserData() {
      Object.assign(userData, {
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        monthlyIncome: "",
        loanAmount: 0,
        loanPeriod: 0,
        loanMonthlyPayment: "",
      });
    }

    return {
      userData,
      setUserData,
      resetUserData,
    };
  },
  {
    persist: true,
  }
);

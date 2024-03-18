import { useUserData } from "~/store";

export default defineNuxtRouteMiddleware((to) => {
  const { userData } = useUserData();
  if (
    (to.path === "/positive-outcome" || to.path === "/negative-outcome") &&
    !userData.name
  ) {
    return navigateTo("/");
  }
});

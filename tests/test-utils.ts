import type { Page } from "@playwright/test";

const clickApplyNowButton = async (page: Page) => {
  const button = page.locator("[data-testid=calculatorApplyNowButton]");
  await button.scrollIntoViewIfNeeded();
  await button?.click();
};

const waitForModalIsVisible = async (page: Page) => {
  const modal = page.locator("[data-testid=modal]");
  await modal.waitFor({ state: "visible" });
};

const waitForModalNotVisible = async (page: Page) => {
  const modal = page.locator("[data-testid=modal]");
  await modal.waitFor({ state: "hidden" });
};

const clickModalSubmitButton = async (page: Page) => {
  const submitButton = page.getByTestId("submitButton");
  submitButton?.click();
};

const fillNameInput = async (page: Page) => {
  const nameInput = await page.$("[name=name]");
  await nameInput?.fill("John");
};

const fillLastNameInput = async (page: Page) => {
  const lastNameInput = await page.$("[name=lastName]");
  await lastNameInput?.fill("Doe");
};

const fillEmailInput = async (
  page: Page,
  email: string = "john.doe@email.com"
) => {
  const emailInput = await page.$("[name=email]");
  await emailInput?.fill(email);
};

const fillPhoneNumberInput = async (
  page: Page,
  phoneNumber: string = "551234567"
) => {
  const phoneNumberInput = await page.$("[name=phoneNumber]");
  await phoneNumberInput?.fill(phoneNumber);
};

const fillMonthlyIncomeInput = async (page: Page, incomeAmount: string) => {
  const monthlyIncomeInput = await page.$("[name=monthlyIncome]");
  await monthlyIncomeInput?.fill(incomeAmount);
};

const dragNthHandleForValue = async (
  page: Page,
  nth: number,
  value: number
) => {
  await page.waitForSelector(".slider-handle");
  const sliderHandle = page.locator(".slider-handle").nth(nth);
  const sliderHandlePosition = await sliderHandle?.boundingBox();
  if (sliderHandlePosition) {
    await page.mouse.move(sliderHandlePosition.x, sliderHandlePosition.y);
    await page.mouse.down();
    await page.mouse.move(
      sliderHandlePosition.x + value,
      sliderHandlePosition.y
    );
    await page.mouse.up();
  }
};

export {
  clickApplyNowButton,
  clickModalSubmitButton,
  dragNthHandleForValue,
  fillEmailInput,
  fillLastNameInput,
  fillMonthlyIncomeInput,
  fillNameInput,
  fillPhoneNumberInput,
  waitForModalIsVisible,
  waitForModalNotVisible,
};

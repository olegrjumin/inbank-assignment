import { expect, test } from "@playwright/test";
import {
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
} from "../test-utils";

test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/");
});

test("User can click logo and go to the main page", async ({ page }) => {
  const logo = page.getByTestId("inbankLogo");
  await logo?.click();
  await page.waitForURL("/");
  const h1 = await page.textContent("h1");
  expect(h1).toContain("Take charge of unexpected costs");
});

test("User can close the modal", async ({ page }) => {
  await clickApplyNowButton(page);
  await waitForModalIsVisible(page);

  const closeButton = page.getByTestId("modalCloseButton");
  await closeButton?.click();

  await waitForModalNotVisible(page);
});

test("User can apply for a loan and see the positive outcome (with defaults)", async ({
  page,
}) => {
  await clickApplyNowButton(page);
  await waitForModalIsVisible(page);

  await fillNameInput(page);
  await fillLastNameInput(page);
  await fillEmailInput(page);
  await fillPhoneNumberInput(page);
  await fillMonthlyIncomeInput(page, "1001");
  await clickModalSubmitButton(page);

  await page.waitForURL("**/positive-outcome");

  const h1 = await page.textContent("h1");
  expect(h1).toContain("Good news!");

  const text = await page.textContent("p");
  expect(text).toContain("Your loan has been approved");

  const loanAmount = await page.textContent("[data-testid=loanAmountValue]");
  expect(loanAmount).toContain("300 €");
  const loanPeriodValue = await page.textContent(
    "[data-testid=loanPeriodValue]"
  );
  expect(loanPeriodValue).toContain("48 months");
  const loanMonthlyPayment = await page.textContent(
    "[data-testid=loanMonthlyPaymentValue]"
  );
  expect(loanMonthlyPayment).toContain("6.25 €");

  await page.reload();
  await page.waitForURL("/positive-outcome");
  const loanAmountAfterReload = await page.textContent(
    "[data-testid=loanAmountValue]"
  );
  expect(loanAmountAfterReload).toContain("300 €");
});

test("User can apply for a loan and see the negative outcome (with defaults)", async ({
  page,
}) => {
  await clickApplyNowButton(page);
  await waitForModalIsVisible(page);
  await fillNameInput(page);
  await fillLastNameInput(page);
  await fillEmailInput(page);
  await fillPhoneNumberInput(page);
  await fillMonthlyIncomeInput(page, "1000");
  await clickModalSubmitButton(page);

  await page.waitForURL("**/negative-outcome");

  const h1 = await page.textContent("[data-testid=welcomeMessage]");
  expect(h1).toContain("Dear John");

  const text = await page.textContent("p");
  expect(text).toContain("Unfortunately, your loan was denied.");

  const outcome = await page.textContent("[data-testid=outcomeInfo]");
  expect(outcome).toContain(
    "In addition to your income and expenses, a number of other factors play a role in loan decisions"
  );

  await page.reload();
  await page.waitForURL("/negative-outcome");
  const h1AfterReload = await page.textContent("h1");
  expect(h1AfterReload).toContain("Dear John");
});

test("User can click apply button when calculator was changed and see the positive outcome", async ({
  page,
}) => {
  const button = page.locator("[data-testid=calculatorApplyNowButton]");
  await button.scrollIntoViewIfNeeded();
  expect(
    await page.textContent("[data-testid=calculatedMonthlyPayment]")
  ).toContain("6.25 €");

  const amountInput = page.locator("[data-testid=amountInput]");

  await expect(amountInput).toHaveValue("300");
  await page.waitForTimeout(500);

  await dragNthHandleForValue(page, 0, 50);
  await page.waitForTimeout(500);

  expect(page.locator("[data-testid=amountInput]")).toHaveValue("1154");

  await page.waitForTimeout(500);
  expect(
    await page.textContent("[data-testid=calculatedMonthlyPayment]")
  ).toContain("24.04 €");

  amountInput?.fill("2000");
  await page.waitForTimeout(500);

  const sliderHandleFirst = page.locator(".slider-handle").nth(0);
  await expect(sliderHandleFirst).toHaveAttribute("aria-valuenow", "2000.0");

  const periodSelect = page.locator("[data-testid=periodSelect]");
  await expect(periodSelect).toHaveValue("48");

  expect(
    await page.textContent("[data-testid=calculatedMonthlyPayment]")
  ).toContain("41.67 €");

  await page.selectOption("[data-testid=periodSelect]", "60");
  await page.waitForTimeout(500);
  const sliderHandleSecond = page.locator(".slider-handle").nth(1);
  await expect(sliderHandleSecond).toHaveAttribute("aria-valuenow", "60.0");

  expect(
    await page.textContent("[data-testid=calculatedMonthlyPayment]")
  ).toContain("33.33 €");

  await dragNthHandleForValue(page, 1, 50);

  await page.waitForTimeout(500);
  await expect(sliderHandleSecond).toHaveAttribute("aria-valuenow", "68.0");

  expect(
    await page.textContent("[data-testid=calculatedMonthlyPayment]")
  ).toContain("29.41 €");

  await clickApplyNowButton(page);
  await waitForModalIsVisible(page);

  await fillNameInput(page);
  await fillLastNameInput(page);
  await fillEmailInput(page);
  await fillPhoneNumberInput(page);
  await fillMonthlyIncomeInput(page, "1001");
  await clickModalSubmitButton(page);

  await page.waitForURL("**/positive-outcome");

  const loanAmount = await page.textContent("[data-testid=loanAmountValue]");
  expect(loanAmount).toContain("2000 €");
  const loanPeriodValue = await page.textContent(
    "[data-testid=loanPeriodValue]"
  );
  expect(loanPeriodValue).toContain("68 months");
  const loanMonthlyPayment = await page.textContent(
    "[data-testid=loanMonthlyPaymentValue]"
  );
  expect(loanMonthlyPayment).toContain("29.41 €");
});

test("User can apply for a loan and see disabled state", async ({ page }) => {
  const amountInput = page.locator("[data-testid=amountInput]");

  await expect(amountInput).toHaveValue("300");

  amountInput.fill("0");

  await page.locator("text=Invalid amount").waitFor({ state: "visible" });

  await page.locator("text=...").waitFor({ state: "visible" });

  const button = page.locator("[data-testid=calculatorApplyNowButton]");

  await expect(button).toBeDisabled();
});

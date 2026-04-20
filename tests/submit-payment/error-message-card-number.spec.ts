import { test, expect } from "../../utilities/sep-test-utilities";
import { CommonUI } from "../../utilities/sep-test-utilities";
import { ReviewPaymentPage } from "../../pages/ReviewPaymentPage";

test.describe("Error message for the invalid card number @sep25", () => {
  let reviewPaymentPage: ReviewPaymentPage;

  test.beforeEach(async ({ page }) => {
    reviewPaymentPage = new ReviewPaymentPage(page);
    await CommonUI.completeStartApplicationForm(page);
    await CommonUI.completeSelectingPaymentPlan(page, "upfront");
  });

  test("Verify that an error message is displayed when the card number is too short", async ({
    page,
  }) => {
    await reviewPaymentPage.enterCardNumber("12345678");
    await reviewPaymentPage.clickTermsAndConditionsCheckbox();
    await expect(reviewPaymentPage.cardNumberErrorMessage).toHaveText(
      "Your card number is incomplete.",
    );
    await page.waitForTimeout(5000);
  });

  test("Verify that an error message is displayed when the card number is wrong", async ({
    page,
  }) => {
    await reviewPaymentPage.enterCardNumber("1111111111111111");
    await reviewPaymentPage.clickTermsAndConditionsCheckbox();
    await expect(reviewPaymentPage.cardNumberErrorMessage).toHaveText(
      "Your card number is invalid.",
    );
    await page.waitForTimeout(5000);
  });
});

import { test, expect } from "../../utilities/sep-test-utilities";
import { StartApplicationPage } from "../../pages/StartApplicationPage";
import { productInfo } from "../../utilities/qa-data-reader";
import { fa, faker } from "@faker-js/faker";

test.describe(" Display the steps of the checkout process @sep08", () => {
  let starteAppPage: StartApplicationPage;

  test.beforeEach(async ({ page }) => {
    starteAppPage = new StartApplicationPage(page);
  });

  test("Verify that all 3 steps are visible", async ({ page }) => {
    await expect(starteAppPage.paymentPlanStepCircle).toBeVisible();
    await expect(starteAppPage.reviewStepCircle).toBeVisible();
    await expect(starteAppPage.startApplicationStepCircle).toBeVisible();
  });

  test("Verify the stepper colors are appropriately displayed", async ({
    page,
  }) => {
    await expect(starteAppPage.startApplicationStepCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)",
    );
    await expect(starteAppPage.paymentPlanStepCircle).toHaveCSS(
      "background-color",
      "rgba(0, 0, 0, 0)",
    );
    await expect(starteAppPage.reviewStepCircle).toHaveCSS(
      "background-color",
      "rgba(0, 0, 0, 0)",
    );
  });
});

import { test, expect } from "../../utilities/sep-test-utilities";
import { StartApplicationPage } from "../../pages/StartApplicationPage";
import { productInfo } from "../../utilities/qa-data-reader";
import { fa, faker } from "@faker-js/faker";

test.describe("Click next button on step 1 @sep19", () => {
  let starteAppPage: StartApplicationPage;

  test.beforeEach(async ({ page }) => {
    starteAppPage = new StartApplicationPage(page);
  });

  test("Verify that user is able to move onto Step 2 with all fields", async ({
    page,
  }) => {
    await starteAppPage.enterFirstName(faker.person.firstName());
    await starteAppPage.enterLastName(faker.person.lastName());
    await starteAppPage.enterEmail(faker.internet.email());
    await starteAppPage.enterPhoneNumber(faker.string.numeric(10));
    await starteAppPage.selectHowDidYouHearAboutUs("instagram");
    await starteAppPage.clickNextButton();
    await expect(starteAppPage.paymentPlanStepCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)",
    );
  });

  test("Verify that user is able to move onto Step 2 with required fields only", async ({
    page,
  }) => {
    await starteAppPage.enterFirstName(faker.person.firstName());
    await starteAppPage.enterLastName(faker.person.lastName());
    await starteAppPage.enterEmail(faker.internet.email());
    await starteAppPage.enterPhoneNumber(faker.string.numeric(10));
    await starteAppPage.clickNextButton();
    await expect(starteAppPage.paymentPlanStepCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)",
    );
  });

  //TODO Complete the other remaining tests of this user story ...
});

import { by, device, expect, element } from "detox";

describe("Sign up page test suite", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("User is able to fill the sign up form", async () => {
    await element(by.id("sign-up-button")).tap();
    await element(by.id("email-input-field")).tap();
    await element(by.id("email-input-field")).typeText("test@example.com");
    await element(by.id("phone-number-input-field")).tap();
    await element(by.id("phone-number-input-field")).typeText("+48791543754");
    await element(by.id("password-input-field")).tap();
    await element(by.id("password-input-field")).typeText("Password1234");
    await element(by.id("confirm-password-input-field")).tap();
    await element(by.id("confirm-password-input-field")).typeText(
      "Password1234"
    );
    await element(by.id("sign-up-button")).tap();
    await expect(element(by.id("sign-up-resent-button"))).toBeVisible();
  });
});

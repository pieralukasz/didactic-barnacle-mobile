import { by, device, expect, element } from "detox";

describe("Sign in page test suite", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("User is able to fill the sign in form", async () => {
    await element(by.id("email-input-field")).tap();
    await element(by.id("email-input-field")).typeText("test@example.com");
    await element(by.id("password-input-field")).tap();
    await element(by.id("password-input-field")).typeText("Password1234");
    await element(by.id("sign-in-button")).tap();
    await expect(element(by.id("sign-in-button"))).toBeVisible();
  });
});

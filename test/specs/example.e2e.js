const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("should logout and verify logout alert message", async () => {
    const btnLogout = $('a[href="/logout"]');
    const flashAlert = $("#flash");

    btnLogout.click();

    expect(flashAlert).toHaveTextContaining(
      "You logged out of the secure area!"
    );
  });
});

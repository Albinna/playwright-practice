import test, { expect } from "@playwright/test";

test.describe("Sign up form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Sign up" }).click();
  });

  test.describe("Sign up process", () => {
    test("Should sign up successfully with valid data", async ({ page }) => {
      const inputs = page.locator("app-signup-modal input");

      await inputs.nth(0).fill("Albina");
      await inputs.nth(1).fill("Leonova");
      await inputs.nth(2).fill(`albina${Date.now()}@gmail.com`);
      await inputs.nth(3).fill("cftxdr34oKM");
      await inputs.nth(4).fill("cftxdr34oKM");

      await page.getByRole("button", { name: "Register" }).click();

      await expect(page.locator("h1")).toHaveText("Garage");
    });
  });

  test.describe("Name Validation", () => {
    test("Should show error for empty Name", async ({ page }) => {
      const signUpModal = page.locator("app-signup-modal");
      const nameInput = signUpModal.locator("input").nth(0);
      const nameError = signUpModal.locator(".invalid-feedback").first();

      await nameInput.focus();
      await nameInput.blur();

      await expect(nameError).toHaveText("Name required");
      await expect(nameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for short Name", async ({ page }) => {
      const nameFormGroup = page.locator("app-signup-modal .form-group").nth(0);
      const nameInput = nameFormGroup.locator("input");
      const nameError = nameFormGroup.locator(".invalid-feedback");

      await nameInput.fill("A");
      await nameInput.blur();

      await expect(nameError).toHaveText(
        "Name has to be from 2 to 20 characters long",
      );
      await expect(nameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for long Name", async ({ page }) => {
      const nameFormGroup = page.locator("app-signup-modal .form-group").nth(0);
      const nameInput = nameFormGroup.locator("input");
      const nameError = nameFormGroup.locator(".invalid-feedback");

      await nameInput.fill("A".repeat(21));
      await nameInput.blur();

      await expect(nameError).toHaveText(
        "Name has to be from 2 to 20 characters long",
      );
      await expect(nameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for Cyrillic Name", async ({ page }) => {
      const nameFormGroup = page.locator("app-signup-modal .form-group").nth(0);
      const nameInput = nameFormGroup.locator("input");
      const nameError = nameFormGroup.locator(".invalid-feedback");

      await nameInput.fill("Альбіна");
      await nameInput.blur();

      await expect(nameError).toHaveText("Name is invalid");
      await expect(nameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should accept valid Name", async ({ page }) => {
      const nameFormGroup = page.locator("app-signup-modal .form-group").nth(0);
      const nameInput = nameFormGroup.locator("input");
      const nameError = nameFormGroup.locator(".invalid-feedback");

      await nameInput.fill("Albina");
      await nameInput.blur();

      await expect(nameError).not.toBeVisible();
    });
  });

  test.describe("Last Name Validation", () => {
    test("Should show error for empty Last name", async ({ page }) => {
      const lastNameFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(1);
      const lastNameInput = lastNameFormGroup.locator("input");
      const lastNameError = lastNameFormGroup.locator(".invalid-feedback");

      await lastNameInput.focus();
      await lastNameInput.blur();

      await expect(lastNameError).toHaveText("Last name required");
      await expect(lastNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for short Last name", async ({ page }) => {
      const lastNameFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(1);
      const lastNameInput = lastNameFormGroup.locator("input");
      const lastNameError = lastNameFormGroup.locator(".invalid-feedback");

      await lastNameInput.fill("L");
      await lastNameInput.blur();

      await expect(lastNameError).toHaveText(
        "Last name has to be from 2 to 20 characters long",
      );
      await expect(lastNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for long Last name", async ({ page }) => {
      const lastNameFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(1);
      const lastNameInput = lastNameFormGroup.locator("input");
      const lastNameError = lastNameFormGroup.locator(".invalid-feedback");

      await lastNameInput.fill("A".repeat(21));
      await lastNameInput.blur();

      await expect(lastNameError).toHaveText(
        "Last name has to be from 2 to 20 characters long",
      );
      await expect(lastNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for Cyrillic Last name", async ({ page }) => {
      const lastNameFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(1);
      const lastNameInput = lastNameFormGroup.locator("input");
      const lastNameError = lastNameFormGroup.locator(".invalid-feedback");

      await lastNameInput.fill("Леонова");
      await lastNameInput.blur();

      await expect(lastNameError).toHaveText("Last name is invalid");
      await expect(lastNameInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should accept valid Last name", async ({ page }) => {
      const lastNameFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(1);
      const lastNameInput = lastNameFormGroup.locator("input");
      const lastNameError = lastNameFormGroup.locator(".invalid-feedback");

      await lastNameInput.fill("Leonova");
      await lastNameInput.blur();

      await expect(lastNameError).not.toBeVisible();
    });
  });

  test.describe("Email Validation", () => {
    test("Should show error for empty Email", async ({ page }) => {
      const emailFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(2);
      const emailInput = emailFormGroup.locator("input");
      const emailError = emailFormGroup.locator(".invalid-feedback");

      await emailInput.focus();
      await emailInput.blur();

      await expect(emailError).toHaveText("Email required");
      await expect(emailInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for invalid Email", async ({ page }) => {
      const emailFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(2);
      const emailInput = emailFormGroup.locator("input");
      const emailError = emailFormGroup.locator(".invalid-feedback");

      await emailInput.fill("albina.leonova.khgmail.com");
      await emailInput.blur();

      await expect(emailError).toHaveText("Email is incorrect");
      await expect(emailInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should accept valid Email", async ({ page }) => {
      const emailFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(2);
      const emailInput = emailFormGroup.locator("input");
      const emailError = emailFormGroup.locator(".invalid-feedback");

      await emailInput.fill(`albina+${Date.now()}@gmail.com`);
      await emailInput.blur();

      await expect(emailError).not.toBeVisible();
    });
  });

  test.describe("Password Validation", () => {
    test("Should show error for empty Password", async ({ page }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");
      const passwordError = passwordFormGroup.locator(".invalid-feedback");

      await passwordInput.focus();
      await passwordInput.blur();

      await expect(passwordError).toHaveText("Password required");
      await expect(passwordInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for short Password", async ({ page }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");
      const passwordError = passwordFormGroup.locator(".invalid-feedback");

      await passwordInput.fill("Aa1aaaa");
      await passwordInput.blur();

      await expect(passwordError).toHaveText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
      await expect(passwordInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for long Password", async ({ page }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");
      const passwordError = passwordFormGroup.locator(".invalid-feedback");

      await passwordInput.fill("Aa1aaaatesttest1");
      await passwordInput.blur();

      await expect(passwordError).toHaveText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
      await expect(passwordInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for Password without integer", async ({ page }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");
      const passwordError = passwordFormGroup.locator(".invalid-feedback");

      await passwordInput.fill("Testtest");
      await passwordInput.blur();

      await expect(passwordError).toHaveText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
      await expect(passwordInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for Password without capital letter", async ({
      page,
    }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");
      const passwordError = passwordFormGroup.locator(".invalid-feedback");

      await passwordInput.fill("test1test");
      await passwordInput.blur();

      await expect(passwordError).toHaveText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
      await expect(passwordInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should show error for Password without small letter", async ({
      page,
    }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");
      const passwordError = passwordFormGroup.locator(".invalid-feedback");

      await passwordInput.fill("TEST1TEST");
      await passwordInput.blur();

      await expect(passwordError).toHaveText(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
      await expect(passwordInput).toHaveCSS("border-color", "rgb(220, 53, 69)");
    });

    test("Should accept valid Password", async ({ page }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");
      const passwordError = passwordFormGroup.locator(".invalid-feedback");

      await passwordInput.fill("cftxdr34oKM");
      await passwordInput.blur();

      await expect(passwordError).not.toBeVisible();
    });
  });

  test.describe("Re-enter password Validation", () => {
    test("Should show error for empty Re-enter password", async ({ page }) => {
      const repeatPasswordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(4);
      const repeatPasswordInput = repeatPasswordFormGroup.locator("input");
      const repeatPasswordError =
        repeatPasswordFormGroup.locator(".invalid-feedback");

      await repeatPasswordInput.focus();
      await repeatPasswordInput.blur();

      await expect(repeatPasswordError).toHaveText(
        "Re-enter password required",
      );
      await expect(repeatPasswordInput).toHaveCSS(
        "border-color",
        "rgb(220, 53, 69)",
      );
    });

    test("Should show error when Re-enter password does not match Password", async ({
      page,
    }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");

      const repeatPasswordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(4);
      const repeatPasswordInput = repeatPasswordFormGroup.locator("input");
      const repeatPasswordError =
        repeatPasswordFormGroup.locator(".invalid-feedback");

      await passwordInput.fill("cftxdr34oKM");
      await repeatPasswordInput.fill("cftxdr34oKM1");
      await repeatPasswordInput.blur();

      await expect(repeatPasswordError).toHaveText("Passwords do not match");
      await expect(repeatPasswordInput).toHaveCSS(
        "border-color",
        "rgb(220, 53, 69)",
      );
    });

    test("Should accept matching passwords", async ({ page }) => {
      const passwordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(3);
      const passwordInput = passwordFormGroup.locator("input");

      const repeatPasswordFormGroup = page
        .locator("app-signup-modal .form-group")
        .nth(4);
      const repeatPasswordInput = repeatPasswordFormGroup.locator("input");
      const repeatPasswordError =
        repeatPasswordFormGroup.locator(".invalid-feedback");

      await passwordInput.fill("cftxdr34oKM");
      await repeatPasswordInput.fill("cftxdr34oKM");
      await repeatPasswordInput.blur();

      await expect(repeatPasswordError).not.toBeVisible();
    });
  });

  test.describe("Register button Validation", () => {
    test("Should keep Register button disabled when fields are empty", async ({
      page,
    }) => {
      const registerButton = page.getByRole("button", { name: "Register" });

      await expect(registerButton).toBeVisible();
      await expect(registerButton).toBeDisabled();
    });

    test("Should enable Register button when all fields are valid", async ({
      page,
    }) => {
      const inputs = page.locator("app-signup-modal input");
      const registerButton = page.getByRole("button", { name: "Register" });

      await inputs.nth(0).fill("Albina");
      await inputs.nth(1).fill("Leonova");
      await inputs.nth(2).fill(`albina${Date.now()}@gmail.com`);
      await inputs.nth(3).fill("cftxdr34oKM");
      await inputs.nth(4).fill("cftxdr34oKM");
      await inputs.nth(4).blur();

      await expect(registerButton).toBeVisible();
      await expect(registerButton).toBeEnabled();
    });

    test("Should keep Register button disabled when at least one field is invalid", async ({
      page,
    }) => {
      const inputs = page.locator("app-signup-modal input");
      const registerButton = page.getByRole("button", { name: "Register" });

      await inputs.nth(0).fill("A");
      await inputs.nth(1).fill("Leonova");
      await inputs.nth(2).fill(`albina${Date.now()}@gmail.com`);
      await inputs.nth(3).fill("cftxdr34oKM");
      await inputs.nth(4).fill("cftxdr34oKM");
      await inputs.nth(4).blur();

      await expect(registerButton).toBeDisabled();
    });
  });
});

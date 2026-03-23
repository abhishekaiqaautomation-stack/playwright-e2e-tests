import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
test.beforeEach(async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
        await page.getByRole("link", { name: "Make Appointment" }).click();
  });



  test("Should load homepage with correct title", async ({ page }) => {
      
    await expect(
      page.getByText("Please login to make appointment."),
    ).toBeVisible();

    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("//h2")).toHaveText("Make Appointment");
  });

  test("Should be fail with incorrect UrserName", async ({ page }) => {
    
 
    await expect(
      page.getByText("Please login to make appointment."),
    ).toBeVisible();

    await page.getByLabel("Username").fill("John smith");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});

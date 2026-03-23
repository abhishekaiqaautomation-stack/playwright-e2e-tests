import {test, expect} from '@playwright/test';


test('Should load homepage with correct title', async ({page}) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);

// Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

// Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

// Assert header text
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare Service');


});


test.only("should demo locator", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
        await page.getByRole("link", { name: "Make Appointment" }).click();
  });
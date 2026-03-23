import { test, expect } from "@playwright/test";

test("CodeGen Testing", async ({ page }) => {
  //Launch the application
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  //2 click on make appointment
  await page.getByRole("link", { name: "Make Appointment" }).click();
  // await page.getByLabel("Username").click();

  //3 fill the login form
  await page.getByLabel("Username").fill("John Doe");
  // await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();

  //4 fill the appointment form
  await page.getByRole("heading", { name: "Make Appointment" }).click();
  await page
    .getByLabel("Facility")
    .selectOption("Hongkong CURA Healthcare Center");
  await page.locator("span").click();
  await page.getByRole("cell", { name: "19" }).click();
  await page.getByRole("textbox", { name: "Comment" }).click();
  await page.getByRole("textbox", { name: "Comment" }).fill("health issue");
  await page.getByRole("button", { name: "Book Appointment" }).click();

  //5 after pooking appoinment come to homepage
  await page.getByRole("link", { name: "Go to Homepage" }).click();
});

import { test, expect } from '@playwright/test';


test('Can_do_Updates_GORDON_KRULL_Email_Phone_as_811_in_SF', async ({page, browser }) => {
  //UATX
  
  await page.goto('https://healthbc--hlthbcuatx.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').fill('automation.811@phsa.ca.hlthbcuatx');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Technology1990!!!!!!');
  /*
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Search', { exact: true }).click();
  //await page.getByPlaceholder('Search...').fill('Gordon Krull');
  await page.waitForTimeout(500);
  await page.getByPlaceholder('Search...').fill('9873026929');
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Search...').press('Enter');
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: '- Search 9873026929 - Search' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('heading', { name: 'Gordon Krull' }).getByRole('link').click();
  await page.waitForTimeout(2000);
  //Go to the Gordon Case
  //await page.click('div.slds-grid a.slds-truncate');
  await page.getByLabel('Cases').getByRole('link').nth(1).click();
  await page.waitForTimeout(1000);
  //Update Email and Phone
  await page.click('[aria-label="Edit"]');
  await page.waitForTimeout(1000);
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('igor.emelyanov_Updates_SF@phsa.ca');
  await page.getByLabel('Telephone Number').nth(0).click();
  await page.waitForTimeout(1000);
  await page.getByLabel('Telephone Number').nth(0).fill('(250) 555-7777');
  await page.getByRole('button', { name: 'Save' }).click();
  //Validate updated fields
  const isTextVisible1 = await page.locator('text=igor.emelyanov_updates_sf@phsa.ca').isVisible();
  const isTextVisible2 = await page.locator('text=2505557777').isVisible();
*/  
}); 



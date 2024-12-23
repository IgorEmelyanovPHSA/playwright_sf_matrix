import { test, expect } from '@playwright/test';


test('Can_Check_GORDON_KRULL_Case_Activity_History_as_811_in_SF', async ({page, browser }) => {
  //UATX
  await page.goto('https://healthbc--hlthbcuatx.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').fill('automation.811@phsa.ca.hlthbcuatx');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Technology1990!!!!!!');
  
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByLabel('Search', { exact: true }).click();
  await page.waitForTimeout(2000);
  await page.getByLabel('Search', { exact: true }).click();
  //await page.getByPlaceholder('Search...').fill('Gordon Krull');
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Search...').fill('9873026929');
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('Search...').press('Enter');
  await page.waitForTimeout(2000);
  await page.getByRole('tab', { name: '- Search 9873026929 - Search' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('heading', { name: 'Gordon Krull' }).getByRole('link').click();
  await page.waitForTimeout(2000);
  //Go to the Case
  //await page.click('div.slds-grid a.slds-truncate');
  await page.getByLabel('Cases').getByRole('link').nth(1).click();
  await page.getByRole('tab', { name: 'Activity' }).click();
  await page.waitForTimeout(2000);
  //Validate
  //const historyRegistered = page.locator('text=Health Connect Registry');
  const historyRegistered = page.getByLabel('Activity History|Activity').getByRole('link', { name: 'Health Connect Registry – Confirmation of Registration' })
  //const historyUpdated = page.locator('text=Health Connect Registry – Update Successful');
  const historyUpdated = page.getByLabel('Activity History|Activity').getByRole('link', { name: 'Health Connect Registry – Update Successful' })
  await expect(historyRegistered).toBeVisible();
  await expect(historyRegistered).toHaveText('Health Connect Registry – Confirmation of Registration');
  await expect(historyUpdated).toBeVisible();
  await expect(historyUpdated).toHaveText('Health Connect Registry – Update Successful');
  
  
}); 



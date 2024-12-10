import { test, expect } from '@playwright/test';


test('Can_do_Updates_GORDON_KRULL_Email_Phone_as_811_in_SF', async ({page, browser }) => {
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
  //Go to the Gordon Case
  //await page.click('div.slds-grid a.slds-truncate');
  await page.getByLabel('Cases').getByRole('link').nth(1).click();
  await page.waitForTimeout(1000);
  //Update Email and Phone
  await page.click('[aria-label="Edit"]');
  await page.waitForTimeout(1000);
  await page.getByLabel('Email Address').nth(0).click();
  await page.getByLabel('Email Address').nth(0).fill('igor.emelyanov_Updates_SF@phsa.ca');

  //if nothing in the Case Mobile Number component -empty
  const caseMobileTelephoneNumber_updatedMobNumberATD = "//runtime_omnistudio_omniscript-omniscript-block[@data-omni-key = 'Mobile']//runtime_omnistudio_omniscript-omniscript-telephone[@data-omni-key = 'updatedMobNumberATD']//input"
  if (await page.locator(caseMobileTelephoneNumber_updatedMobNumberATD).isVisible()) {
    console.log("The element updatedMobNumberATD is visible!");
    await page.locator(caseMobileTelephoneNumber_updatedMobNumberATD).waitFor();
    await page.locator(caseMobileTelephoneNumber_updatedMobNumberATD).click();
    await page.waitForTimeout(1000);
    await page.locator(caseMobileTelephoneNumber_updatedMobNumberATD).fill('(250) 555-7777');
  } else {
    console.log("The element updatedMobNumberATD is not visible.");
  }
  //if something in the Case Mobile Number component already
  const caseMobileTelephoneNumber_contactPointMobileNumber = "//runtime_omnistudio_omniscript-omniscript-block[@data-omni-key = 'Mobile']//runtime_omnistudio_omniscript-omniscript-telephone[@data-omni-key = 'contactPointMobileNumber']//input"
  if (await page.locator(caseMobileTelephoneNumber_contactPointMobileNumber).isVisible()) {
    console.log("The element contactPointMobileNumber is visible!");
    await page.locator(caseMobileTelephoneNumber_contactPointMobileNumber).waitFor();
    await page.locator(caseMobileTelephoneNumber_contactPointMobileNumber).click();
    await page.waitForTimeout(1000);
    await page.locator(caseMobileTelephoneNumber_contactPointMobileNumber).fill('(250) 555-7777');
  } else {
    console.log("The element contactPointMobileNumber is not visible.");
  }

  //await page.getByLabel('Telephone Number').nth(1).click();
  //await page.waitForTimeout(1000);
  //await page.getByLabel('Telephone Number').nth(1).fill('(250) 555-7777');
  
  await page.locator('label').filter({ hasText: 'An address change for this' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000);
  //Validate updated fields
  const caseEmail = page.locator('a[href="mailto:igor.emelyanov_updates_sf@phsa.ca"]');
  await expect(caseEmail).toBeVisible();
  await expect(caseEmail).toHaveText('igor.emelyanov_updates_sf@phsa.ca');
  const caseMobile = page.locator('text=2505557777');
  //const caseMobile = page.locator('div.vloc-min-height div');
  await expect(caseMobile).toBeVisible();
  await expect(caseMobile).toHaveText('2505557777');
}); 



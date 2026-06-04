//const {test, expect} = require('@playwright/test')
import {test,expect} from '@playwright/test' // this is anothr way to import the files in playwright


test('Locators', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/")

    //click on login button -> via property
    // await page.locator('id=login2').click() // this is one approach
    await page.click('id=login2') //-> this is more popular
 
    //we are using CSS

   await page.fill('#loginusername', 'pavanol');
   await page.fill('#loginpassword', 'test@123');
   //now suing xpath 
   // /wecan clickon loginbuttonand copy the xpath via selector hub then past it on the method
   
      await page.click("//button[normalize-space()='Log in']");

    // now once we ar eloged in we need 

    const logoutLink = page.locator("//a[@id='logout2']")

    //now we need to see the visibility of the above and to verify that we will use assertion via  expect

    await expect(logoutLink).toBeVisible();

    await page.close();
})
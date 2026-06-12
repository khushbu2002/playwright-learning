const {test, expect} = require('@playwright/test')

test("Soft assertion", async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html")
 
    //hard assertion
    // await expect(page).toHaveTitle('STORE')
    // await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    
    // await expect(page.locator('.navbar-brand')).toBeVisible();

    //for soft assertions we just need to add .soft after expect and then contiune in the same manner

    //soft assertion

    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})
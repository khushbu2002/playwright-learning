const { test, expect } = require('@playwright/test');

test('AssertionTest', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    console.log('Current URL:', page.url());
    console.log('Current Title:', await page.title());

    await page.screenshot({ path: 'register-page.png' });

    await expect(page).toHaveURL(
        'https://demo.nopcommerce.com/register'
    );

    await expect(page).toHaveTitle(
        'nopCommerce demo store. Register'
    );

    const logoElement = page.locator('.header-logo');

    await expect(logoElement).toBeVisible();

    const searchStoreBox = page.locator('#small-searchterms'); //-> selecetd the element 
    await expect(searchStoreBox).toBeEnabled();//  -> pass here to checl

    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.check();
    await expect(maleRadioButton).toBeChecked();

    //checkbox

    const newsLetterCheckbox = await page.locator('#Newsletter');
    await newsLetterCheckbox.check();
    await expect(newsLetterCheckbox).toBeChecked();

    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit'); //-> this is how we can verify the attribute of the element

    await expect(await page.locator('page-title h1')).toHaveText('Register')   

    await expect(page.locator('.header-menu')).toContainText('Reg'); //-> this is how we can verify the text of the element

    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaceValue('test@demo.com')

    //if i want to check number of all the available options in a drop down field/box , in taht case we can use this assertion method 
    
    //first get locator of it
    const options = await page.locator ('select[name="DateOfBirthMonth] option') //-> this will capture multiple elements 
    
    await expect(options).toHaveCount(13)


     

}); 
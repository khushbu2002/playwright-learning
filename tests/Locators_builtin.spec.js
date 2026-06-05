

//  page.getByAltText() - to locate an element, usually image, by its text alternative.
//  page.getByPlaceholder() - to locate an imput by placeholder
//  page.getByRole() - to locate by explicit and implicit accessibility attributes.
//  page.getByText - to locate by text content.
//  page.getByLabel() - to locate a form control by associated label's text.
//  page.getByTitle() - to locate an element by its title attribute.
//  page.getByTestId() - to locate an element based on its data-testedid attribute (other attributes can be con)


const {test, expect} = require('@playwright/test')

test('Built-inLocators', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = await page.getByAltText('company-branding')

    await expect(logo).toBeVisible();

    const username = await page.getByPlaceholder('Username').fill("Admin")

    const password = await page.getByPlaceholder('Password').fill("admin123")

    await page.getByRole("button", { type: 'submit'}).click()

    const displayName = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()

    await expect(await page.getByText(displayName)).toBeVisible()

    


})
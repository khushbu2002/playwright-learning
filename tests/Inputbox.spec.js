const {test, expect} = require('@playwright/test')

test('Handle inputbox', async ({page}) => {

    page.goto('https://itera-qa.azurewebsites.net/home/automation');

    page.locator("//input[@id = 'name']").fill("John")
    //here fill is the action 
    

})
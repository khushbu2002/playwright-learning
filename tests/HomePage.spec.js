const {test, expect} = require('@playwright/test') //we are importing the test and expect functions from the Playwright testing library. The test function is used to define test cases, while the expect function is used for making assertions in our tests.

// now we will write the test block
// inside the test block we need to give an anonymous function which will be xecuted when the function runs.

test('HomePage', async ({page}) => {
    // this is a tets block
    //this anonymous function will use a ficture and this fixture will be pased to anonymius fujction
     //page.goto means we are using page ficture and thennusing goto method to navigate to the url

    await page.goto('https://www.demoblaze.com/');

    const pageTitle = await page.title(); //page.title() is a function that will return the title of the page. we are storing the title in a variable called pageTitle

    console.log('Page title is: ' + pageTitle);
    // like this we can capture the title. now this is not mandatory to capture the title but we want to validate the title to see how it works 
    //now the above code is the test part, 
    //now we will see the expect part or the validation part

    await expect(page).toHaveTitle(/STORE/); // this is exactly the validation point
    const pageURL = await page.url();
    console.log('Page URL is: ' + pageURL);
    await expect(page).toHaveURL('https://www.demoblaze.com/'); // this is another validation point to validate the url
     await page.close()
 
})
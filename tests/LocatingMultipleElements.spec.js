const {test, expect} = require('@playwright/test')

// so here we will be locating multiple elemenst of a web page

test('LocateMultipleElements', async ({page})=> {

    //step 1 is to launch the application

    await page.goto('https://www.demoblaze.com/index.html')

    //to locate multiple elements we will use  page.$$('a')
    
    //here we are using an anchor tag 'a' because it is matching with every element, but we must use 
    const links = await page.$$('a'); //-> we got all the links

    //now since we have like all the elements via anchor tag, as we know when we get the elements of the web page via querySelectorAll() it returns us a nodeList on which we perform the actions like forEach() etc

    // similarly this page.$$('a') will return us an array of ElementHandle object for every element found on the page, if no element found then it will return an empty array

    // now because we want to check or traverse or validate each element in the array, we are going to use the loops. we may even use HOI of array accodring to the requirements.

     for(const link of links) {
        //now what are we doing here, we are going to each and every element and extracting the text element from it

      //   const linkText = await link.textContent();
      //   console.log(linkText);
      const linkText = await link.textContent();
      console.log(`[${linkText}]`);
      

     }

}) // -> our good old test function
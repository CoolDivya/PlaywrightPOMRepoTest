//Handle Pop up

import {test, expect, chromium} from "@playwright/test"

test("handle popup", async({browser})=>{

  const context = (await browser).newContext();
  const page = (await context).newPage();

  (await page).goto("");

  //handle multiple popups
  // after click on one button we are getting new 2 pop ups
  // handle using waitforevent for pop up and both should be in parallely clicking on button
  // and catching event for 2 pop up

  await Promise.all([(await page).waitForEvent('popup'),(await page).locator("").click()]);

  const allPopup=(await context).pages();

  console.log(allPopup.length)  // return 3 main page and 2 pop up

  // return url of pop up window
  console.log(allPopup[1].url())
  console.log(allPopup[2].url())

  for(const pw of allPopup)
  {
    console.log(pw.title)
  }
})
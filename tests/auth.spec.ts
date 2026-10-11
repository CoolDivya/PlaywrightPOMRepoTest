import {test, expect, chromium} from "@playwright/test"

test("authenticated pop-up", async()=>{

const browser = await chromium.launch()

// approache1: passw username and password in browser context
//const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
const context = await browser.newContext()

// create parent page
const page = await context.newPage();

//Approach2:
// we can pass username and password in url like selenium like below
//(await page).goto("https://username:password@the-internet.herokuapp.com/basic_auth");
await page.goto("https://www.google.com/");

//(await page).goto("https://the-internet.herokuapp.com/basic_auth");
await page.waitForLoadState();


})
import {test, expect, chromium} from "@playwright/test"

// Browser --> context1 -> page1, page2
//Browser - chromium, firefox, webkit
// context - we can create multiple context for multiple user/app for same browser
 //          it provide way to handle multiple independent sessions

 //pages - it can be tab, window or pop up is not alert


//now here we are passing {page} fixture so for this which browser and browser context is taken by default
// browser is taken from playwright.config.ts file and by default one context for page
 test("Browser context demo", async({page})=>{


})

// if we want to create own context then create page like below

// test("Browser context demo", async({context})=>{
// const page = await context.newPage()
// await page.goto("")

// })

// // if we want to create own browser then create context and page like below

// test("Browser context demo", async({browser})=>{
// const context = await browser.newContext()
// const page = await context.newPage()
// await page.goto("")

// })

// if we want to use own browser
test("Browser context demo", async({})=>{

const browser = await chromium.launch()
const context = await browser.newContext()

//create multiple pages in one context
const page1 = await context.newPage()
const page2 = await context.newPage()

console.log(context.pages().length)  // count pages in one context ->2

await page1.goto("")
await page2.goto("")

})
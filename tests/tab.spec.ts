import {test, expect, chromium} from "@playwright/test"

test("handle tabs", async()=>{

const browser = chromium.launch()
const context = (await browser).newContext()

// create parent page
const parentPage = (await context).newPage();

(await parentPage).goto("url1");

//on url1 click on any button and it will open one other page (tab)
//capture title of both parent and new page tabs
// capture pages and then count
//before click on button we need to specify waitfor event (page) and then we will catch that event
// waitForEvent('page') returen promise of page
// event should trigger after click on button and both returns Promise
// so both need to be run using Promise (All) method
// waitForEvent - returns page and void void if page is not available

const [childPage]= await Promise.all([(await context).waitForEvent('page'),(await parentPage).locator("").click()]);


//Switch between pages
// Approach 1: by using context, for more pages than 2 then use this approach
// first to identify how many pages opened in context
const pages = (await context).pages();  // it return array of pages
console.log(pages.length)  // 2

//capture title of first page and second
console.log("title of parent page:" ,pages[0].title())
console.log("title of child page:" ,pages[1].title())

//Approach2: direct approach and it is only for 2 approach
console.log("title of parent page:" ,(await parentPage).title())
console.log("title of child page:" ,childPage.title())









})
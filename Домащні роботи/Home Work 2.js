import { expect } from '@wdio/globals'

//describe("Webdriverio main page", () => {

    xit ("Open Site", async ()=> {
        await browser.url('https://webdriver.io');
        
    });
    xit ("Click API ", async ()=> {
        await browser.url('https://webdriver.io');
        
        let clickAPI = await $('nav a[href="/docs/api"]')
        await clickAPI.click()
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api') // проверяем  URL
    });
    xit ("Скрол в футер сайта к ссылке блог", async ()=> {
        await browser.url('https://webdriver.io/docs/api');

        const getStartedLink = await $('.footer__link-item[href="/blog"]')
        await browser.pause(2000)

        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        
    }); 
    xit ("displayed", async ()=> {
        await browser.url('https://webdriver.io/docs/api');

        const getStartedLink = await $('.footer__link-item[href="/blog"]')
        await browser.pause(2000)

        await getStartedLink.scrollIntoView()

        await browser.pause(2000)
        const blogButton = await $('.footer__link-item[href="/blog"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is displayed: " + displayed)//outputs: true
        
    }); 
    xit ("isEnabled", async ()=> {
        await browser.url('https://webdriver.io/docs/api');

        const getStartedLink = await $('main nav a[href="/docs/api/protocols"]')
        //await browser.pause(2000)

        await getStartedLink.scrollIntoView()

        //await browser.pause(2000)

        let elem = await $('main nav a[href="/docs/api/protocols"]')
        let isEnabled = await elem.isEnabled();
        console.log('isEnabled '+isEnabled); // outputs: true

        
    }); 
    xit ("Проверка на кликабельность", async ()=> {
        await browser.url('https://webdriver.io/docs/api');

        const getStartedLink = await $('main nav a[href="/docs/api/protocols"]')
        
        await getStartedLink.scrollIntoView()

        const blogButton = await $('main nav a[href="/docs/api/protocols"]')
        let clickable  =await blogButton.isClickable()
        console.log("is clickable: " + clickable)//outputs:true        
    }); 

    xit ("Получние елемента HTML", async ()=> {

        await browser.url('https://webdriver.io/docs/api');

        const getStartedLink = await $('main nav a[href="/docs/api/protocols"]')
        
        await getStartedLink.scrollIntoView()

        const outerHTML = await $('main nav a[href="/docs/api/protocols"]').getHTML()
        console.log("outerHTML: " + outerHTML)
        
        const innerHTML = await $('main nav a[href="/docs/api/protocols"]').getHTML(false)
        console.log('innerHTML :' + innerHTML)
    }); 
    it ("Переход по ссылке ", async ()=> {

        await browser.url('https://webdriver.io/docs/api');

        const getStartedLink = await $('main nav a[href="/docs/api/protocols"]')
        
        await getStartedLink.scrollIntoView()
        let linkFut= await $('main nav a[href="/docs/api/protocols"]')

        await browser.pause(2000)
        await linkFut.click()// нажимаем на link

        await browser.waitUntil(async () =>{
            return (await $('h1=Protocol Commands')).isDisplayed();
        },5000, "Button is not displayed")

    }); 
//});
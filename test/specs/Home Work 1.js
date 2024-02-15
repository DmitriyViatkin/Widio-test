import { expect } from '@wdio/globals'

describe("Webdriverio main page", () => {

    it("open the site webdriver ", async () => {
         
        await browser.url('https://webdriver.io/')// Открываем сайт: webdriver.io
        await browser.pause(2000)

        

        
    });
    it ("click on API ", async () => {
        let linkAPI= await $('#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > a:nth-child(4)')

        await browser.pause(2000)
        await linkAPI.click()// нажимаем на АРI
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api') // проверяем  URL
        
        

    });
    it ("Check title", async () => {

            await browser.url('https://webdriver.io/docs/api/')
    
            let title = await $("h1=Introduction")
            await expect(title).toHaveText('Introduction')
    });
    it("Check WebDriver",async()=>{
            const link = await $('=WebDriver')
            await expect(link).toHaveHref('/docs/api/webdriver')
    });

    it ("Check Search",async () => {

            let lincSearch = await $('.DocSearch-Button-Placeholder=Search')
            await browser.pause(1000)
            await lincSearch.click()
            await browser.pause(1000)
            let inputSearch = await $("#docsearch-input")
            await inputSearch.addValue("Got morning")
            await browser.pause(1000)
            await inputSearch.clearValue()
            await browser.pause(1000)
    });
});
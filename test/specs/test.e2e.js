import MainPage  from "./../pages/main.page.js"
import GameDevPage from "./../pages/gamedev.page.js";
import GameDevPageTopRatesPage from "../pages/gamedevToprates.page.js";
import gamedevPage from "./../pages/gamedev.page.js";

describe ("Donn", () => {

    it ("should show addValue command", async() => {

        await browser.url('https://dou.ua');

        

        await MainPage.clickOnForumBtn()
        await browser.pause(2000)

        await MainPage.clickOnBandBtn()
        await browser.pause(2000)

        await MainPage.clickOnGameDevBtn()
        await browser.pause(2000)

       // expect(GameDevPage.companyGameDevsRateLink).toBeClickable()
        await GameDevPage.clickOnTopGamesRateLink()
        expect (GameDevPageTopRatesPage.title).toHaveValue("Матеріали на тему <<топ ігор місяця>>")
    });
    
})
import MainPage  from "./../pages/main.page.js"
//import GameDevPage from "./../pages/gamedev.page.js";
//import GameDevPageTopRatesPage from "../pages/gamedevToprates.page.js";
//import GameDevPage from "./../pages/gamedev.page.js";
import SalariesPage from "./../pages/salaries.page.js";
import JobPage from "./../pages/Job.page.js";


describe ("Home work lesson 23", () => {

    it ("Home work lesson 23", async() => {
//1.Зайти на сайт доу
        await browser.url('https://dou.ua');
        await browser.pause (2000)
//2.перейти на зарплати
    await MainPage.clickOnsalariesBtn()
    await browser.pause(2000)
//3.перевірити напис квартиль
    expect (SalariesPage.text).toHaveValue("I Квартиль")
//4.перейти на вкладку робота
    await MainPage.clickOnJobBtn()
    await browser.pause(2000)
//5. перевірить видимість кнопки "Знайти"
    await JobPage.isDisplayedserchBtn()

       // await MainPage.clickOnForumBtn()
        //await browser.pause(2000)

        //await MainPage.clickOnBandBtn()
       // await browser.pause(2000)

        //await MainPage.clickOnGameDevBtn()
        //await browser.pause(2000)

       // expect(GameDevPage.companyGameDevsRateLink).toBeClickable()
       // await GameDevPage.clickOnTopGamesRateLink()
        //expect (GameDevPageTopRatesPage.title).toHaveValue("Матеріали на тему <<топ ігор місяця>>")
    });
    
})
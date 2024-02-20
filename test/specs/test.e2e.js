import GitMainPage from "./../git_page/git_main.page.js";
import ResurcesPage from "./../git_page/Resurces.page.js";
import SearchPage from "./../git_page/Search.page.js";
import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'
import PricingPage from "./../git_page/pricing.page.js";

describe ("Home work lesson 25", () => {

    xit ("TestCase 1", async() => {
//1.Зайти на сайт GitHub
         await browser.url('https://github.com');
         await browser.pause (2000)
//2.Нажать на Signup
         await GitMainPage.clickOnSignupBtn()
         await browser.pause (2000)
//3.Ждать появления инпута 
         await GitMainPage.waitUntilText()
         browser.pause(2000)
            
//4.Провірить наявність тексту
        expect (GitMainPage.text).toHaveValue("Welcome to GitHub!")
//5. Ввести мейл
         await GitMainPage.InputEmail()
         await browser.pause (2000)
//6. нажать продолжить
         await GitMainPage.clickOnContinueBtn()
         await browser.pause (2000)
//7. ввести пароль
         await GitMainPage.InputPassword()
//8. Нажать продолжить
         await GitMainPage.clickOnContinueBtn()
//9.ввести юсер нейм
         await GitMainPage.InputUserName()
//10. нажать продолжить
         await GitMainPage.clickOnContinueBtn()
//11. ввести "у"
         await GitMainPage.clickOncheckBoxBtn()
//12. нажать продолжить
         await GitMainPage.clickOnContinueBtn()
    });
    xit ("TestCase 2", async() => {
//1 Відкриваємо сайт 
         await browser.url('https://github.com');
         await browser.pause (2000)
//2 Скролимо в футер
         await GitMainPage.FutertxtScrol()
         await browser.pause(2000)
         await GitMainPage.linckVisible()
         await browser.pause(2000)
//3 Переходимо по ссилці
         await GitMainPage.linkDisk.click()
//4 Перевіряємо заголовок
         await GitMainPage.checkH1teext()

    })
    it ("TestCase 3", async() => {
//1 Відкриваємо сайт GitHub
                await browser.url('https://github.com');
                await browser.pause (2000)
 //2 скролим в футер
        await GitMainPage.ScrollfuterSubscrible()
//3 перевіряємо на клиакбельность
        await GitMainPage.futerSubscribleclicable()
//4 натимскаєм на кнопку
        await GitMainPage.futerSubscribleclick()
//5 перевіряємо URL
         await ResurcesPage.CheckUrl()
//6 перевіряємо заголовок
         await ResurcesPage.ChecText()
//7 вводим worck email
         await ResurcesPage.inputWorkEmail()       
//8 нажимаем на випадающий список
         await ResurcesPage.ClicCountry()
//9 клик по країні в списку
         await ResurcesPage.ClicCountryValue()
//10 нажимаєм на  check box 

         await ResurcesPage.ClicCheckBoxSub()
//11 нажимаєм на кнопку Subscrib
         await browser.pause(2000)
         await ResurcesPage.ClicSubscribBtn()

         await ResurcesPage.ClicSubscribBtn()
         await browser.pause(2000)
        

//12 Проверяєм заголовок
         await ResurcesPage.checkSubText()

        })
    xit ("TestCase 4", async() => {
        //1 откриваєм сайт GitHub
                                await browser.url('https://github.com');
                                await browser.pause (2000)
        //2 клик по кнопке поиска
                        await SearchPage.ClickOnSearch()
        //3 ввод текста в поле поиска
                //await SearchPage.InputOnSearch()
                await (SearchPage.inputSearch).addValue('Python')
               
        //4 нажимаем ентер на клавиатуре
                await browser.keys([Key.Enter])
        //5 проверяем поиск
                      
                await SearchPage.CheckTextSearch()   
                
        })
xit ("TestCase 5", async () => {

//1 Відкрити сайт GitHub
        await browser.url('https://github.com');
        await browser.pause (2000)
//2 Натиснути на "Pricing"
        await PricingPage.ClickLinkPricing()
//3 Перевірити заголовок "Get the complete developer platform."
        await PricingPage.CheckTitle()
//4 Скрол до "Compare all features"
        await PricingPage.ScrollLink()
//5 Натиснути на "Compare all features"
        await PricingPage.ClickScrollLink()
//6 Перевірити заголовок "Compare features"
        await PricingPage.CheckTitle2()

})

})
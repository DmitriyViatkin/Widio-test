import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'

describe("Webdriverio main page", () => {
    xit ("Початок реєстрації через кнопку “Sing up for GitHub", async ()=> {
        await browser.url('https://github.com');

        let input = await $("#user_email")
            await input.addValue('ivanoviv19891@gmail.com')
            let buttonCl= await $('.btn-mktg.width-full.width-md-auto.mb-3.mb-md-0.rounded-md-left-0.home-campaign-signup-button.btn-signup-mktg')

            
            await buttonCl.click()// нажимаем на АРI
            await expect(browser).toHaveUrl('https://github.com/signup?user_email=ivanoviv19891%40gmail.com&source=form-home-signup') // проверяем  URL

        
    }); 
    xit ("Початок реєстрації через кнопку “Sing up”", async ()=> {
        await browser.url('https://github.com');
        let buttonSingup= await $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')            
        await buttonSingup.click()// нажимаем на Singup
        await expect(browser).toHaveUrl('https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
//email
await browser.waitUntil(async () =>{
    return (await $('#email')).isDisplayed();
        },20000, "email is not displayed")
        let input = await $('#email')
        await input.addValue('ivanoviv19891@gmail.com')
        console.log(await input.getValue())
//Continue
        let buttonContinue= await $('.js-continue-button.signup-continue-button.form-control.px-3.width-full.width-sm-auto.mt-4.mt-sm-0')            
        await buttonContinue.click()// нажимаем на Singup
        await expect(browser).toHaveUrl('https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home')
    }); 
    xit ("Вхід на GitHub через “Sing in”", async ()=> {
        await browser.url('https://github.com');
        let buttonSingin= await $('.position-relative.mr-lg-3.d-lg-inline-block a[href="/login"]')  
        await buttonSingin.click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl('https://github.com/login')
//email
        let inputField= await $("#login_field")
        await inputField.setValue('ivanoviv19891@gmail.com')
        console.log(await inputField.getValue())

//password
        let inputPassword = await $('#password')
        await inputPassword.setValue("D1i1234567@")
        console.log(await inputPassword.getValue())

//click Singin
        let buttonSingIn = await $('.btn.btn-primary.btn-block.js-sign-in-button')
        await buttonSingIn.click()
        await expect(browser).toHaveUrl('https://github.com/session')

    }); 
    xit ("Перехід до вибору корпоративного плану через кнопку “Start a free enterprise trial”", async ()=> {
         await browser.url('https://github.com');
         let button_free_enterprise= await $('.btn-mktg.home-campaign-enterprise.btn-muted-mktg')  
         await button_free_enterprise.click()
         await browser.pause(2000)
         await expect(browser).toHaveUrl('https://github.com/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+hero&ref_page=%2F')

        
    }); 
    it ("Перевірка пошуку на головній сторінці", async ()=> {
        await browser.url('https://github.com');
         let button_free_enterprise= await $('.header-search-button.placeholder.input-button.form-control.d-flex.flex-1.flex-self-stretch.flex-items-center.no-wrap.width-full.py-0.pl-2.pr-0.text-left.border-0.box-shadow-none')  
         await button_free_enterprise.click()
    
         let inputSearch = await $('#query-builder-test')
         await inputSearch.addValue('Python')
         console.log(await inputSearch.getValue())
         await browser.keys([Key.Enter])
         //await browser.pause(2000)
         await expect(browser).toHaveUrl('https://github.com/search?q=Python&type=repositories')
        let elem= $('.Text-sc-17v1xeu-0.qaOIC.search-match em')
         await expect(elem).toHaveText('Python')
    }); 



})
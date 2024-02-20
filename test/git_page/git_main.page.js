class GitMainPage {

    get SignupBtn() {return $('.HeaderMenu-link.HeaderMenu-link--sign-up.flex-shrink-0.d-none.d-lg-inline-block.no-underline.border.color-border-default.rounded.px-2.py-1')}
    get Text() {return $('.text-mono.text-gray-light-mktg')}
    get inputEmail() {return $('#email')}
    get mail () {'ivanoviv19891@gmail.com'}
    get password () {'D1i1234567@'}
    get inputpassword () {return $('#password')}
    get text () {return $('.text-mono.text-gray-light-mktg')} 
    get ContinueBtn () {return $('//*[@id="email-container"]/div[2]/button')}
    get inputUserName () {return $('#login')}
    get UserName () {'iIvanR42'}
    get checkBox () {return $('#opt_in')}
    get futerTxt (){return $('//*[text()="GitHub Discussions"]')}
    get linkDisk (){return $('//*[@id="collaboration"]/div/div[3]/div[1]/card-skew/div/div[1]/div/a')}
    get H1teext () {return $('.mt-4.f3-mktg.color-fg-muted.mx-auto.col-7-max')}
    get H1teext1 () {return ('Ask questions, share ideas, and build connections with each other—all right next to your code. GitHub Discussions enables healthy and productive software collaboration.')}
    get futerSubscrible () {return $('a[href="https://resources.github.com/newsletter/"]')}
    
    
    


    
    
    async ScrollfuterSubscrible(){
        (await this.futerSubscrible).scrollIntoView()
      // 
    }
    async futerSubscribleclicable (){
        (await this.futerSubscrible).isClickable()
    }
    async futerSubscribleclick(){
        (await  this.futerSubscrible).click()
    }

    async checkH1teext(){
        await expect (this.H1teext).toHaveText(this.H1teext1)
    }
    async linckVisible(){
        (await this.linkDisk).isDisplayedInViewport()
    }
    async FutertxtScrol(){
     (await this.futerTxt).scrollIntoView()
     await browser.pause(2000)
    }
    async clickOncheckBoxBtn(){
        (await this.checkBox).click()
    }
    async InputUserName(UserName){
        (await this.inputEmail).setValue(UserName)}

    async clickOnContinueBtn(){
        (await this.ContinueBtn).click()
    }
    async InputEmail(){
        (await this.inputEmail).setValue('ivanoviv19891@gmail.com')
    }
    async InputPassword() {
        (await this.inputpassword).addValue('D1i1234567@')
    }
    async clickOnSignupBtn(){
        (await this.SignupBtn).click()
    }
       
    async waitUntilPas(){
        await browser.waitUntil(async () =>{
        return (await this.inputpassword).isDisplayed();
        },50000,"Button is not displayed")
        browser.pause(2000)}


    async waitUntilText(){
        await browser.waitUntil(async () =>{
        return (await this.inputEmail).isDisplayed();
        },50000,"Button is not displayed")
        browser.pause(2000)
    }
    async waitUntilContinue(){
        await browser.waitUntil(async () =>{
        return (await this.ContinueBtn).isDisplayed();
        },60000,"Button is not displayed")
        browser.pause(2000)
    }
};

export default new GitMainPage()
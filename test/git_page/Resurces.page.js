class ResurscesPage {
    get checText () {return $('#hero-section-brand-heading')}
    get checText1 () {return ('Subscribe to our developer newsletter')}
    get WorkEmail (){return $('//*[@id=":R8d76:"]')}
    get workemail (){return ('ivanoviv19891@gmail.com')}
    get country (){return $('#country')}
    get country1 (){return $('//*[@id="country"]/option[6]')}
    get CheckBoxSub (){return $('#gated-agree-marketingEmailOptin1')}
    get Btn (){return $('//*[@id="form"]/form/div/button')}
    get SubText (){return $('#hero-section-brand-heading')}
    get SubText1 (){return ('Thanks for subscribing!')}

    
    async WorkerEmailClick(){
        (await this.WorkEmail).click()
      // 
    }

    async ScrollWorkerEmail(){
        (await this.WorkEmail).scrollIntoView()
      // 
    }
    
    async checkSubText(){
        await expect (this.SubText).toHaveText(this.SubText1)
    }
    
    async ClicSubscribBtn (){

        (await  this.Btn).click()
    }

    async ClicCheckBoxSub (){

        (await  this.CheckBoxSub).click()

    }
    
    async ClicCountry (){

        (await  this.country).click()

    }
    async ClicCountryValue (){

        (await  this.country1).click()

    }
    async CheckUrl(){
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')
    }
    async ChecText(){
        await expect (this.checText).toHaveText(this.checText1)
    }

    async inputWorkEmail (){
        (await this.WorkEmail).setValue('ivanoviv19891@gmail.com')
}
    };

export default new ResurscesPage()
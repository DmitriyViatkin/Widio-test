class PricingPage {

get linkPricing (){return $('//html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[4]/a')}
get titleHeder () {return $('//html/body/div[1]/div[4]/main/div[1]/h1')}
get sckrollText () {return $('//html/body/div[1]/div[4]/main/div[2]/div[2]/div[3]/a')}
get titleText () {return $('//html/body/div[1]/div[4]/main/div[2]/div[2]/div[3]/a')}


async ClickLinkPricing (){
    (await this.linkPricing).click()
}
async CheckTitle (){

     await expect(this.titleHeder).toHaveText('Get the complete developer platform.')
}
async ScrollLink (){
    (await this.sckrollText).scrollIntoView()
}
async ClickScrollLink (){
    (await this.sckrollText).click()
}
async CheckTitle2 (){

    await expect(this.titleText).toHaveText('Compare all features')
}

}

export default new PricingPage()
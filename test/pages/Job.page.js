class JobPage {

    get serchBtn () {return $('.btn-search')}

    async isDisplayedserchBtn(){
       (await this.serchBtn).isDisplayed()
        
    }
    
}
export default new JobPage()
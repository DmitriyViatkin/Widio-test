class SearchPage {
   
    get inputSearch () {return $('#query-builder-test')}
    get button_search (){return  $('.header-search-button.placeholder.input-button.form-control.d-flex.flex-1.flex-self-stretch.flex-items-center.no-wrap.width-full.py-0.pl-2.pr-0.text-left.border-0.box-shadow-none')}  
    get elem (){return $('.Text-sc-17v1xeu-0.qaOIC.search-match em')}
    async ClickOnSearch (){
        (await this.button_search).click()
    }
    async InputOnSearch (){
    
         (await this.inputSearch).addValue('Python')
        
         
    }

    async CheckTextSearch(){

        await expect(this.elem).toHaveText('Python')
    }
       
    
}

export default new SearchPage()
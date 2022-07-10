import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitWebsite(text:string){
        this.accessUrl(text);
    }
}

export class RobotEyes extends BaseEyes{
    seesMainPage(){
        this.seesDomVisible("Main page")
    }  

    seesTitle(id:string){
        this.seesIdVisible(id);

    }

    
    seesQuantity(dom:string,text:string){
        this.seesDomContainText(dom,text);
    }



}

export class RobotHands extends BaseHands{

    searchtesting(){
        this.typeTextonDom("name", "search", "Automation Testing")
            .clickOnDomElement("[class='sprite svg-search-icon']")
    }

    clickWithSelector(text:string){
        this.clickOnDomElement(text);
    }

    clickOnTodaysDeals(text:string){
        this.clickOnDomElement(text);
    }

    clickOnThirdDeal(text:string){
        this.clickOnDomElement(text);
    }

    clickOnFirstItem(text:string){
        this.clickOnDomElement(text);

    }

    clickOnAddToCart(text:string){
        this.clickOnDomElement(text);
    }

    clickAddToCart(id:string){
        this.clickOnId(id);
    }

    clickOnCart(id:string){
        this.clickOnId(id);
    }

    TypeOnSearch(id:string,text:string){
        this.typeTextonId(id,text)
    }

    clickOnSearchButton(id:string){
        this.clickOnId(id);
    }

    scrollToLast(dom:string){
        this.scrollToWithLocator(dom);
    }

    clickOnNavbar(id:string){
        this.clickOnId(id);
    }

    clickOnMobileTab(dom:string){
        this.clickOnDomElement(dom);
    }
    
    clickOnMobileOption(dom:string){
        this.clickOnDomElement(dom);

    }
}
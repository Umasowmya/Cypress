import cypress = require('cypress');
import { RobotHands, Dependencies,RobotEyes } from '../robots/wikipedia/Robot'

context('Search Test', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()

    describe('Search the required information', ()=>{

      it('Navigate to amazon site', () => {
          dependencies.visitWebsite('http://www.amazon.in')
      })

      it("click on today' deals ",()=>{

          robotHands.clickOnDomElement(".nav-a[href='/deals?ref_=nav_cs_gb']");

      })

      it('add third deal to cart',()=>{

        robotHands.clickOnThirdDeal("div[data-testid='grid-deals-container']>div:nth-child(2)");
        robotHands.clickOnFirstItem("span[data-component-type='s-product-image']",2);
        robotEyes.seesTitle("productTitle");
        robotHands.clickAddToCart("add-to-cart-button");
        robotHands.clickOnCart("nav-cart");
        robotEyes.seesQuantity("#a-autoid-0-announce > span.a-dropdown-prompt","1");
      
      })


      // it('search for mobiles and select last item',()=>{

      //   dependencies.visitWebsite('http://www.amazon.com')
      //   robotHands.TypeOnSearch("twotabsearchtextbox","mobile phones")
      //   robotHands.clickOnSearchButton('nav-search-submit-button')
      //   robotHands.clickOnDomElement(".s-main-slot.s-result-list.s-search-results.sg-row>div:nth-last-child(6) span[data-component-type='s-product-image']")
      //   robotHands.wait(2000);
      //   robotEyes.seesTitle('productTitle')

      // })

      // it('select phones from side navbar',()=>{

      //   dependencies.visitWebsite('http://www.amazon.in')
      //   robotHands.clickOnNavbar("nav-hamburger-menu");
      //   robotHands.clickOnMobileTab("a[data-menu-id='8']");
      //   robotHands.clickOnMobileOption("ul.hmenu.hmenu-visible.hmenu-translateX li:nth-child(3)");
      // })

      // it('sign in to website',()=>{

      //     robotHands.clickOnNavbar("nav-hamburger-menu")
      //     robotHands.clickOnSignIn(".hmenu.hmenu-visible>li:last-child")
      //     robotHands.typeUsername("ap_email",Cypress.env("USERNAME"));
      //     robotHands.clickOnId("continue");
      //     robotHands.wait(3000);
      //     robotHands.typePassword("ap_password",Cypress.env("PASSWORD"));
      //     robotHands.clickOnId("signInSubmit");
      //     robotEyes.seesTextWithId("nav-link-accountList-nav-line-1","Hello, Uma")


      //  })

      // it('get first item delivery details',()=>{
      //   robotHands.clickOnNavbar("nav-hamburger-menu")
      //   robotHands.clickOnAccount(".hmenu.hmenu-visible>li:nth-last-child(3)")
      //   robotHands.clickOnOrder("div[data-card-identifier='YourOrders']")
      //   robotHands.typeUsername("ap_email",Cypress.env("USERNAME"));
      //   robotHands.clickOnId("continue");
      //   robotHands.wait(3000);
      //   robotHands.typePassword("ap_password",Cypress.env("PASSWORD"));
      //   robotHands.clickOnId("signInSubmit");
      //   robotHands.selectInDropDown("select#time-filter","2019")
      //   robotHands.wait(1000)
      //   robotHands.clickOnOrderDetails("div#ordersContainer>div:nth-child(2) a.a-link-normal.yohtmlc-order-details-link")
      //   robotEyes.seesTextWithClassAndIndex("order-date-invoice-item",0,'\n                Ordered on 23 March 2019\n                \n            ')
      
      // })


      //  it('add address ',()=>{

      //   robotHands.clickOnNavbar("nav-hamburger-menu")
      //   robotHands.clickOnAccount(".hmenu.hmenu-visible>li:nth-last-child(3)")
      //   robotHands.clickOnOrder("div[data-card-identifier='AddressesAnd1Click']")
      //   robotHands.typeUsername("ap_email",Cypress.env("USERNAME"));
      //   robotHands.clickOnId("continue");
      //   robotHands.wait(3000);
      //   robotHands.typePassword("ap_password",Cypress.env("PASSWORD"));
      //   robotHands.clickOnId("signInSubmit");
      //   robotHands.clickOnId("ya-myab-plus-address-icon");
      //   robotHands.typeTextonId("address-ui-widgets-enterAddressFullName",Cypress.env("fullName"))
      //   robotHands.typeTextonId("address-ui-widgets-enterAddressPhoneNumber",Cypress.env("phoneNo"))
      //   robotHands.typeTextonId("address-ui-widgets-enterAddressPostalCode",Cypress.env("pincode"))
      //   robotHands.typeTextonId("address-ui-widgets-enterAddressLine1",Cypress.env("houseNo"))
      //   robotHands.typeTextonId("address-ui-widgets-enterAddressLine2",Cypress.env("street"))

      //   robotHands.typeTextonId("address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId",Cypress.env("state"))
      //   robotHands.scrollToLast(".a-button-input")
      //   robotEyes.seesDomContainText("h4.a-alert-heading","Address saved")

      //  })


      //  it('add payment',()=>{

      //       robotHands.clickOnNavbar("nav-hamburger-menu")
      //       robotHands.clickOnAccount(".hmenu.hmenu-visible>li:nth-last-child(3)")
      //       robotHands.clickOnOrder("div[data-card-identifier='PaymentOptions']")
      //       robotHands.typeUsername("ap_email",Cypress.env("USERNAME"));
      //       robotHands.clickOnId("continue");
      //       robotHands.wait(3000);
      //       robotHands.typePassword("ap_password",Cypress.env("PASSWORD"));
      //       robotHands.clickOnId("signInSubmit");
      //       robotHands.wait(4000);
      //       robotHands.addCreditCard("input.a-button-input")
      //       robotEyes.seesDomEnabled("input.a-button-input")

      //  })

      

})

})


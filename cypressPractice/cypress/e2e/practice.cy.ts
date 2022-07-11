/// <reference types="Cypress" />
import '../support/e2e';

context('Perform Test', () => {
    
    describe('Perform test', ()=>{

      it('Navigate to freshworks site', () => {
          cy.visit('https://www.freshworks.com');
      })

      it("click on support ",()=>{                  //get

        cy.get(".nav-label[href='/support']").click();

        cy.wait(4000);

        cy.url().should('include','/support')           ///assertion
    
        cy.contains("Need support? We are here to help")    //contains

    })

    it('Navigate back to home page',()=>{       //window
        cy.go('back');
        cy.wait(4000);
    })

    it('go forward to support page',()=>{           //window 

        cy.go('forward')

        cy.url().should('include','/support')
    })


    it('reloads page',()=>{
        cy.reload(true)
    })

      
    it('drop down practice',()=>{               //drop down

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')

        cy.get('#Form_submitForm_Country')
        .select('India')
        .should('have.value','India')

        cy.get('#Form_submitForm_State')
        .select('Telangana')
        .should('have.value','Telangana')

    })

   
    it('mouse over feature',()=>{               //mouse over

        cy.visit('https://www.spicejet.com')
        cy.viewport(1920, 1080)


        cy.contains('SpiceClub').trigger('mouseover')

        cy.contains('Our Program').click()



    })


    it('selecting by index',()=>{                           //traversal 

        cy.visit('https://www.amazon.in')

        cy.get("#nav-hamburger-menu").click();

        cy.get('.hmenu.hmenu-visible>li')                   //eq 
         .eq(2).should('contain', 'New Releases')
         .click()

         cy.go('back')

        cy.get("#nav-hamburger-menu").click();              //last child

        cy.get('.hmenu.hmenu-visible>li')
         .last().should('contain', 'Sign In')
         .click()

         cy.go('back')



         

         cy.get("#nav-hamburger-menu").click(); 

         cy.get('.hmenu.hmenu-visible>li')                   //prev 
         .eq(3).prev()
         .click()  


         

         cy.get("#nav-hamburger-menu").click(); 

         cy.get('.hmenu.hmenu-visible>li')                   //next 
         .eq(2).next()
         .click()  

         

         cy.get("#nav-hamburger-menu").click(); 


         cy.get('.hmenu.hmenu-visible').find('li').eq(2).click();                 //find 
          




    })


    it("type action" ,()=>{                                 //type ,clear action

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')


        cy.wait(1000);
        cy.get('#Form_submitForm_Name')
        .type("Uma Sowmya")    
        .clear()
        .should('have.value','')
        .type('Uma Sowmya')


        cy.get('#Form_submitForm_Email')
        .type("abc@gmail.com")

        cy.get('#Form_submitForm_Contact')
        .type("9876543210")

        

    })

    it('scroll action ',()=>{                                                                   //scroll, click
        cy.get("a[href='/company/about-us/about-orangehrm/']").scrollIntoView().click()

        cy.go('back')

        cy.get("a[href='/company/about-us/about-orangehrm/']").scrollIntoView().rightclick()        //right-click



    })




})

})

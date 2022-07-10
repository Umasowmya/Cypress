/// <reference types="Cypress" />
import '../support/e2e';

context('Search Test', () => {
    
    describe('Search the required information', ()=>{

      it('Navigate to freshworks site', () => {
          cy.visit('https://www.freshworks.com');
      })

      it("click on support ",()=>{

        cy.get(".nav-label[href='/support']").click();

        cy.wait(4000);
        cy.url().should('include','/support')
    
        cy.contains("Need support? We are here to help")

    })

    it('Navigate back to home page',()=>{
        cy.go('back');
        cy.wait(4000);
    })

    it('go forward to support page',()=>{

        cy.go('forward')

        cy.url().should('include','/support')
    })


    it('reloads page',()=>{
        cy.reload(true)
    })

      
    it('drop down practice',()=>{

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')

        cy.get('#Form_submitForm_Country')
        .select('India')
        .should('have.value','India')

        cy.get('#Form_submitForm_State')
        .select('Telangana')
        .should('have.value','Telangana')

    })

   
    it('mouse over feature',()=>{

        cy.visit('https://www.spicejet.com')
        cy.viewport(1920, 1080)


        cy.contains('SpiceClub').trigger('mouseover')

        cy.contains('Our Program').click()

    })


    it('selecting by index',()=>{

        cy.visit('https://www.amazon.in')

        cy.get("#nav-hamburger-menu").click();

        cy.get('.hmenu.hmenu-visible>li')
         .eq(2).should('contain', 'New Releases')
         .click()

         cy.go('back')

        cy.get("#nav-hamburger-menu").click();

        cy.get('.hmenu.hmenu-visible>li')
         .last().should('contain', 'Sign In')
         .click()

         cy.go('back')


        cy.get("#nav-hamburger-menu").click();

        cy.get('.hmenu-item')
         .eq(2).should('contain', '')
         .click()


    })


})

})

/// <reference types="cypress"/>



describe('My First Test', () => {
    it('load page',()=>{
      cy.visit("https://www.freshworks.com/");

      cy.contains('Customers').click()
      cy.url().should('include','/customers/')

      cy.get('.button.button--white')
      .contains('View all customer stories')
      .click()

      cy.url().should('include','customer-spotlight/')

      cy.get('#onetrust-policy-text')
          .contains('We use cookies')

    
          
      
            
    })

  })



describe('Testing form input and submission', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza')
    })
  
    it('Adds text to inputs and submits the form', () => {
  
      // name input
      cy
        .get('[data-cy=name]')
        .type('Jared')
        .should('have.value', 'Jared')
  
  
      // email input
      cy
        .get('[data-cy=email]')
        .type('test@email.com')
        .should('have.value', 'test@email.com')
  
  
  
      // size
      cy
        .get('[data-cy=sizes]')
        .select('large')
        .should('have.value', 'large')
  
      // toppings (pep)
      cy
        .get('[data-cy=pepperoni]')
        .check()
        .should('be.checked')
  
      // toppings (cheese)
      cy
        .get('[data-cy=cheese]')
        .check()
        .should('be.checked')

        // toppings (saus)
      cy
      .get('[data-cy=sausage]')
      .check()
      .should('be.checked')

      // toppings (meat)
      cy
        .get('[data-cy=meatball]')
        .check()
        .should('be.checked')
  
      cy
        .get('[data-cy=submit]')
        .click()
  
    })
  })
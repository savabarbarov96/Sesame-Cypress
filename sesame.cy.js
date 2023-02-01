describe("Login Page Test", () => {



it("Test with invalid credentails", () => {

    cy.visit("https://sesame.bg"); 
    
    cy.url().should('include', 'sesame.bg') // check if user is not redirected
    cy.title().should("equal", "sesame") // check if the title is correct
    cy.get('.consent-popup > .btn').click()
    cy.get('.d-flex-je > .text-center').click();  // cookies click
   
    cy.get(':nth-child(1) > #input-wrapper > .input-group > .form-control').should('be.visible')
    cy.get(':nth-child(1) > #input-wrapper > .input-group > .form-control').type("test123")
    cy.get(':nth-child(2) > #input-wrapper > .input-group > .form-control').type("password123")
    cy.get('[type="submit"]').click()
    cy.get('b').should('have.text', 'Потребителското име или паролата, които сте въвели са невалидни') // confirm login failed
    
})
it("Test user registration with invalid EGN", () => {
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `testname${id}`


    cy.visit("https://sesame.bg"); 
    cy.get('.consent-popup > .btn')
    cy.get('.my-auto').click()
    cy.url().should('contain', 'https://sesame.bg/registration')
    cy.get('.w-100 > .btn').click()
    cy.get(':nth-child(1) > .form-group > #input-wrapper > .input-group > .form-control').type(testname) // username
    cy.get(':nth-child(2) > .form-group > #input-wrapper > .input-group > .form-control').type("GolfGoFast123") // user pass
    cy.get(':nth-child(3) > .form-group > #input-wrapper > .input-group > .form-control').type("GolfGoFast123") // confirm apss
    cy.get('.d-flex > .d-flex-center').click()
    cy.get('[aria-label="България"]').click()
    cy.get(':nth-child(5) > .form-group > #input-wrapper > .input-group > .form-control').type("9910123638")
    cy.get(':nth-child(6) > .form-group > #input-wrapper > .input-group > .form-control').type("Test")
    cy.get(':nth-child(7) > .form-group > #input-wrapper > .input-group > .form-control').type("User")
    cy.get('#input-wrapper > .d-flex-ac').should('have.text', "ЕГН-то не е валидно!") // ЕГН

    
})
})
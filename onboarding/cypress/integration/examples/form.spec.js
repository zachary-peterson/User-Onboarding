describe('The first and last name fields can be filled out', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
      })

    it('can type in the first name field', () => {
        cy.get('#first_nameInput')
        .type('Zachary')
        .should('have.value', 'Zachary')
    })

    it('can type in the last name field', () => {
        cy.get('#last_nameInput')
        .type('Peterson')
        .should('have.value', 'Peterson')
    })
})

describe('The username field can be filled out', () => {
    it('can navigate to the site', () => {
        
      })

    it('can type in the email field', () => {
        cy.get('#usernameInput')
        .type('zpeter')
        .should('have.value', 'zpeter')
    })
})

describe('The email field can be filled out', () => {
    it('can navigate to the site', () => {
        
      })

    it('can type in the email field', () => {
        cy.get('#emailInput')
        .type('Zachary@zach.com')
        .should('have.value', 'Zachary@zach.com')
    })
})

describe('The password fields can be filled out', () => {
    it('can navigate to the site', () => {
        
      })

    it('can type in the password field', () => {
        cy.get('#passwordInput')
        .type('11111111')
        .should('have.value', '11111111')
    })

    it('can type in the confirm password field', () => {
        cy.get('#password_twoInput')
        .type('11111111')
        .should('have.value', '11111111')
    })
})

describe('The Terms and Sercives can be agreed to', () => {
    it('can navigate to the site', () => {
        
      })

    it('can click/agree to the Terms and Services', () => {
        cy.get('#terms_check')
        .click()
        .should('have.value', 'on')
    })
})

describe('Form can be submitted', () => {
    it('can navigate to the site', () => {
        
    })

    it('Can submit a fully completed form to the database', () => {
        cy.get('#submit')
        .click()
        cy.get('.Zachary')
    })
})
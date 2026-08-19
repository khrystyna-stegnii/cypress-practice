/// <reference types="cypress" />

describe('Submit the Registration form', () => {
    beforeEach(() => {
            cy.visit('/');
            cy.contains('button', 'Sign up').click();
        });

    context('Modal title', () => {
    
         it('Verify that the modal title is present', () => {
            cy.get('.modal-title').should('have.text', 'Registration');
        });
    }); 
    
    context('Validation of the Name field', () => {
    
         it('Verify that the Name field should have >= 2 characters', () => {
            cy.get('#signupName').type('K');
            cy.get('#signupName').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Name has to be from 2 to 20 characters long')
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that the Name field should have <= 20 characters', () => {
            cy.get('#signupName').type('KristinaTestWithLongName');
            cy.get('#signupName').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Name has to be from 2 to 20 characters long')
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that the Name field can not be empty', () => {
            cy.get('#signupName').type('Kristina');
            cy.get('#signupName').clear();
            cy.get('#signupName').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Name is required')
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that the Name field is invalid if non English language is used', () => {
            cy.get('#signupName').type('Христина');
            cy.get('#signupName').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Name is invalid')
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that leading and trailing spaces are trimmed', () => {
            cy.get('#signupName').type('  Kristina  ');
            cy.get('#signupName').blur();
            cy.get('#signupName').should('have.value', 'Kristina');
        });
    });
    
    context('Validation of the Last Name field', () => {
    
         it('Verify that the Last Name field should have >= 2 characters', () => {
            cy.get('#signupLastName').type('S');
            cy.get('#signupLastName').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Last name has to be from 2 to 20 characters long')
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that the Last Name field should have <= 20 characters', () => {
            cy.get('#signupLastName').type('StegniiTestWithLongName');
            cy.get('#signupLastName').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Last name has to be from 2 to 20 characters long')
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that the Last Name field can not be empty', () => {
            cy.get('#signupLastName').type('Stegnii');
            cy.get('#signupLastName').clear();
            cy.get('#signupLastName').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Last name is required')
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that the Last Name field is invalid if non English language is used', () => {
            cy.get('#signupLastName').type('Стегній');
            cy.get('#signupLastName').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Last name is invalid')
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that leading and trailing spaces are ignored', () => {
            cy.get('#signupLastName').type('  Stegnii  ');
            cy.get('#signupLastName').blur();
            cy.get('#signupLastName').should('have.value', 'Stegnii');
        });
    });
    
    context('Validation of the Email field', () => {
    
        it('Verify that the Email is invalid if the wrong email format is used without @', () => {
            cy.get('#signupEmail').type('Segniigmail.com');
            cy.get('#signupEmail').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Email is incorrect')
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Verify that the Email is invalid if the wrong email format is used without domain', () => {
            cy.get('#signupEmail').type('Segnii@');
            cy.get('#signupEmail').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Email is incorrect')
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that the Email field can not be empty', () => {
            cy.get('#signupEmail').focus();
            cy.get('#signupEmail').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Email required')
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    });
    
    context('Validation of the Password field', () => {
    
        it('Verify that the Password field should have >= 8 characters', () => {
            cy.get('#signupPassword').type('Test1');
            cy.get('#signupPassword').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
         
        it('Verify that the Password field should have <= 15 characters', () => {
            cy.get('#signupPassword').type('Test123456789012345');
            cy.get('#signupPassword').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Verify that the Password field is invalid if there is no integer', () => {
            cy.get('#signupPassword').type('Testtesttest');
            cy.get('#signupPassword').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Verify that the Password field is invalid if there is no capital letter', () => {
            cy.get('#signupPassword').type('testtesttest1');
            cy.get('#signupPassword').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Verify that the Password field is invalid if there is no small letter', () => {
            cy.get('#signupPassword').type('TESTTESTTEST1');
            cy.get('#signupPassword').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
        
        it('Verify that the Password field can not be empty', () => {
            cy.get('#signupPassword').focus();
            cy.get('#signupPassword').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Password required')
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    });
     
    context('Validation of the Re-enter password field', () => {
        
        it('Verify that the Re-enter password field can not be empty', () => {
            cy.get('#signupRepeatPassword').focus();
            cy.get('#signupRepeatPassword').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Re-enter password required')
            cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Verify that the Re-enter password should match with the Password', () => {
            cy.get('#signupPassword').type('Test12345678');
            cy.get('#signupRepeatPassword').type('Test12345');
            cy.get('#signupRepeatPassword').blur();
            cy.get('div.invalid-feedback p').should('have.text', 'Passwords do not match')
            cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });
    });

     context('Submit the registration form', () => {
        
        it('Verify that the "Registration" button is disabled if the invalid data is entered, Name field is less than 2 characters', () => {
            cy.get('#signupName').type('K');
            cy.get('#signupLastName').type('Stegni');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test1245678');
            cy.get('app-signup-modal .btn.btn-primary').should('be.disabled');
    
        });

        it('Verify that the "Registration" button is disabled if the invalid data is entered, Last Name field is more than 20 characters', () => {
            cy.get('#signupName').type('Khrystyna');
            cy.get('#signupLastName').type('StegniiWithLongNameLongName');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test1245678');
            cy.get('app-signup-modal .btn.btn-primary').should('be.disabled');
    
        });

        it('Verify that the "Registration" button is disabled if the invalid data is entered, Email field is left empty', () => {
            cy.get('#signupName').type('Khrystyna');
            cy.get('#signupLastName').type('StegniiWithLongNameLongName');
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test1245678');
            cy.get('app-signup-modal .btn.btn-primary').should('be.disabled');
    
        });

        it('Verify that the "Registration" button is disabled if the invalid data is entered, Password field is less then 8', () => {
            cy.get('#signupName').type('Khrystyna');
            cy.get('#signupLastName').type('Stegnii');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test12');
            cy.get('#signupRepeatPassword').type('Test12');
            cy.get('app-signup-modal .btn.btn-primary').should('be.disabled');
    
        });

         it('Verify that the "Registration" button is disabled if the invalid data is entered, Re-enter password does not match', () => {
            cy.get('#signupName').type('Khrystyna');
            cy.get('#signupLastName').type('Stegnii');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test12456789');
            cy.get('app-signup-modal .btn.btn-primary').should('be.disabled');
    
        });

        it('Successful registration with all valid data', () => {
            cy.get('#signupName').type('Khrystyna');
            cy.get('#signupLastName').type('Stegnii');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test1245678');
            cy.get('app-signup-modal .btn.btn-primary').click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });

        it('Successful registration with min characters for Name and Last Name (2 characters)', () => {
            cy.get('#signupName').type('Kh');
            cy.get('#signupLastName').type('St');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test1245678');
            cy.get('app-signup-modal .btn.btn-primary').click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });

        it('Successful registration with max characters for Name and Last Name (20 characters)', () => {
            cy.get('#signupName').type('KrystynaTestWithLong');
            cy.get('#signupLastName').type('StegniiTestWithLongS');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test1245678');
            cy.get('app-signup-modal .btn.btn-primary').click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });

        it('Successful registration with Name that contains two words', () => {
            cy.get('#signupName').type('Krystyna Mariia');
            cy.get('#signupLastName').type('Stegnii');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test1245678');
            cy.get('app-signup-modal .btn.btn-primary').click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });

        it('Successful registration with Last Name that contains two words', () => {
            cy.get('#signupName').type('Krystyna');
            cy.get('#signupLastName').type('Stegnii Test');
            cy.get('#signupEmail').type(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            cy.get('#signupPassword').type('Test1245678');
            cy.get('#signupRepeatPassword').type('Test1245678');
            cy.get('app-signup-modal .btn.btn-primary').click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });
    });
    
});


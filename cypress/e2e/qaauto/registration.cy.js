/// <reference types="cypress" />

import HomePage from "../../pom/pages/HomePage";
import SignUpForm from "../../pom/forms/SignUpForm";
import url from "../../test-data/url.json";
import colors from "../../test-data/colors.json";

describe('Submit the Registration form', () => {
    beforeEach(() => {
            HomePage.visit();
            HomePage.openSignUpForm();
        });

    context('Modal title', () => {
    
         it('Verify that the modal title is present', () => {
            SignUpForm.formTitle.should('have.text', 'Registration');
        });
    }); 
    
    context('Validation of the Name field', () => {
    
         it('Verify that the Name field should have >= 2 characters', () => {
            SignUpForm.enterName('K');
            SignUpForm.blurName();
            SignUpForm.errorMessage.should('have.text', 'Name has to be from 2 to 20 characters long')
            SignUpForm.nameField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that the Name field should have <= 20 characters', () => {
            SignUpForm.enterName('KristinaTestWithLongName');
            SignUpForm.blurName();
            SignUpForm.errorMessage.should('have.text', 'Name has to be from 2 to 20 characters long')
            SignUpForm.nameField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that the Name field can not be empty', () => {
            SignUpForm.enterName('Kristina');
            SignUpForm.clearName();
            SignUpForm.blurName();
            SignUpForm.errorMessage.should('have.text', 'Name is required')
            SignUpForm.nameField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that the Name field is invalid if non English language is used', () => {
            SignUpForm.enterName('Христина');
            SignUpForm.blurName();
            SignUpForm.errorMessage.should('have.text', 'Name is invalid')
            SignUpForm.nameField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that leading and trailing spaces are trimmed', () => {
            SignUpForm.enterName('  Kristina  ');
            SignUpForm.blurName();
            SignUpForm.nameField.should('have.value', 'Kristina');
        });
    });
    
    context('Validation of the Last Name field', () => {
    
         it('Verify that the Last Name field should have >= 2 characters', () => {
            SignUpForm.enterLastName('S');
            SignUpForm.blurLastName();
            SignUpForm.errorMessage.should('have.text', 'Last name has to be from 2 to 20 characters long')
            SignUpForm.lastNameField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that the Last Name field should have <= 20 characters', () => {
            SignUpForm.enterLastName('StegniiTestWithLongName');
            SignUpForm.blurLastName();
            SignUpForm.errorMessage.should('have.text', 'Last name has to be from 2 to 20 characters long')
            SignUpForm.lastNameField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that the Last Name field can not be empty', () => {
            SignUpForm.enterLastName('Stegnii');
            SignUpForm.clearLastName();
            SignUpForm.blurLastName();
            SignUpForm.errorMessage.should('have.text', 'Last name is required')
            SignUpForm.lastNameField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that the Last Name field is invalid if non English language is used', () => {
            SignUpForm.enterLastName('Стегній');
            SignUpForm.blurLastName();
            SignUpForm.errorMessage.should('have.text', 'Last name is invalid')
            SignUpForm.lastNameField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that leading and trailing spaces are ignored', () => {
            SignUpForm.enterLastName('  Stegnii  ');
            SignUpForm.blurLastName();
            SignUpForm.lastNameField.should('have.value', 'Stegnii');
        });
    });
    
    context('Validation of the Email field', () => {
    
        it('Verify that the Email is invalid if the wrong email format is used without @', () => {
            SignUpForm.enterEmail('Segniigmail.com');
            SignUpForm.blurEmail();
            SignUpForm.errorMessage.should('have.text', 'Email is incorrect')
            SignUpForm.emailField.should('have.css', 'border-color', colors.wrongBorderColor);
        });

        it('Verify that the Email is invalid if the wrong email format is used without domain', () => {
            SignUpForm.enterEmail('Segnii@');
            SignUpForm.blurEmail();
            SignUpForm.errorMessage.should('have.text', 'Email is incorrect')
            SignUpForm.emailField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that the Email field can not be empty', () => {
            SignUpForm.focusEmail();
            SignUpForm.blurEmail();
            SignUpForm.errorMessage.should('have.text', 'Email required')
            SignUpForm.emailField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
    });
    
    context('Validation of the Password field', () => {
    
        it('Verify that the Password field should have >= 8 characters', () => {
            SignUpForm.enterPassword('Test1');
            SignUpForm.blurPassword();
            SignUpForm.errorMessage.should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            SignUpForm.passwordField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
         
        it('Verify that the Password field should have <= 15 characters', () => {
            SignUpForm.enterPassword('Test123456789012345');
            SignUpForm.blurPassword();
            SignUpForm.errorMessage.should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            SignUpForm.passwordField.should('have.css', 'border-color', colors.wrongBorderColor);
        });

        it('Verify that the Password field is invalid if there is no integer', () => {
            SignUpForm.enterPassword('Testtesttest');
            SignUpForm.blurPassword();
            SignUpForm.errorMessage.should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            SignUpForm.passwordField.should('have.css', 'border-color', colors.wrongBorderColor);
        });

        it('Verify that the Password field is invalid if there is no capital letter', () => {
            SignUpForm.enterPassword('testtesttest1');
            SignUpForm.blurPassword();
            SignUpForm.errorMessage.should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            SignUpForm.passwordField.should('have.css', 'border-color', colors.wrongBorderColor);
        });

        it('Verify that the Password field is invalid if there is no small letter', () => {
            SignUpForm.enterPassword('TESTTESTTEST1');
            SignUpForm.blurPassword();
            SignUpForm.errorMessage.should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            SignUpForm.passwordField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
        
        it('Verify that the Password field can not be empty', () => {
            SignUpForm.focusPassword();
            SignUpForm.blurPassword();
            SignUpForm.errorMessage.should('have.text', 'Password required')
            SignUpForm.passwordField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
    });
     
    context('Validation of the Re-enter password field', () => {
        
        it('Verify that the Re-enter password field can not be empty', () => {
            SignUpForm.reEnterPasswordFocus();
            SignUpForm.reEnterPasswordBlur();
            SignUpForm.errorMessage.should('have.text', 'Re-enter password required')
            SignUpForm.reEnterPasswordField.should('have.css', 'border-color', colors.wrongBorderColor);
        });

        it('Verify that the Re-enter password should match with the Password', () => {
            SignUpForm.enterPassword('Test12345678');
            SignUpForm.reEnterPassword('Test12345');
            SignUpForm.reEnterPasswordBlur();
            SignUpForm.errorMessage.should('have.text', 'Passwords do not match')
            SignUpForm.reEnterPasswordField.should('have.css', 'border-color', colors.wrongBorderColor);
        });
    });

     context('Submit the registration form', () => {
        
        it('Verify that the "Registration" button is disabled if the invalid data is entered, Name field is less than 2 characters', () => {
            SignUpForm.enterName('K');
            SignUpForm.enterLastName('Stegni');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test1245678');
            SignUpForm.registerButton.should('be.disabled');
    
        });

        it('Verify that the "Registration" button is disabled if the invalid data is entered, Last Name field is more than 20 characters', () => {
            SignUpForm.enterName('Khrystyna');
            SignUpForm.enterLastName('StegniiWithLongNameLongName');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test1245678');
            SignUpForm.registerButton.should('be.disabled');
    
        });

        it('Verify that the "Registration" button is disabled if the invalid data is entered, Email field is left empty', () => {
            SignUpForm.enterName('Khrystyna');
            SignUpForm.enterLastName('StegniiWithLongName');
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test1245678');
            SignUpForm.registerButton.should('be.disabled');
    
        });

        it('Verify that the "Registration" button is disabled if the invalid data is entered, Password field is less then 8', () => {
            SignUpForm.enterName('Khrystyna');
            SignUpForm.enterLastName('Stegnii');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test12');
            SignUpForm.reEnterPassword('Test12');
            SignUpForm.registerButton.should('be.disabled');
    
        });

         it('Verify that the "Registration" button is disabled if the invalid data is entered, Re-enter password does not match', () => {
            SignUpForm.enterName('Khrystyna');
            SignUpForm.enterLastName('Stegnii');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test12456789');
            SignUpForm.registerButton.should('be.disabled');
    
        });

        it('Successful registration with all valid data', () => {
            SignUpForm.enterName('Khrystyna');
            SignUpForm.enterLastName('Stegnii');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test1245678');
            SignUpForm.clickRegisterButton();
            cy.url().should('eq', url.garagePage);
        });

        it('Successful registration with min characters for Name and Last Name (2 characters)', () => {
            SignUpForm.enterName('Kh');
            SignUpForm.enterLastName('St');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test1245678');
            SignUpForm.clickRegisterButton();
            cy.url().should('eq', url.garagePage);
        });

        it('Successful registration with max characters for Name and Last Name (20 characters)', () => {
            SignUpForm.enterName('KrystynaTestWithLong');
            SignUpForm.enterLastName('StegniiTestWithLongS');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test1245678');
            SignUpForm.clickRegisterButton();
            cy.url().should('eq', url.garagePage);
        });

        it('Successful registration with Name that contains two words', () => {
            SignUpForm.enterName('Krystyna Mariia');
            SignUpForm.enterLastName('Stegnii');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test1245678');
            SignUpForm.clickRegisterButton();
            cy.url().should('eq', url.garagePage);
        });

        it('Successful registration with Last Name that contains two words', () => {
            SignUpForm.enterName('Krystyna');
            SignUpForm.enterLastName('Stegnii Test');
            SignUpForm.enterEmail(`khrystyna.stegnii+${Date.now()}@gmail.com`);
            SignUpForm.enterPassword('Test1245678');
            SignUpForm.reEnterPassword('Test1245678');
            SignUpForm.clickRegisterButton();
            cy.url().should('eq', url.garagePage);
        });
    });
    
});


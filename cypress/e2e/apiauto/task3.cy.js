/// <reference types="cypress" />

import HomePage from '../../pom/pages/HomePage';
import SignInForm from '../../pom/forms/SignInForm';
import GaragePage from '../../pom/pages/GaragePage';
import AddCarForm from '../../pom/forms/AddCarForm';
import url from "../../test-data/url.json";
import EditCarForm from '../../pom/forms/EditCarForm';
import RemoveCarForm from '../../pom/forms/RemoveCarForm';
import AddExpenseForm from '../../pom/forms/AddExpenseForm';
import ProfilePage from '../../pom/pages/Profile.Page';

describe('Change Profile Name using intercepting', () => {
        let response = {
            "status": "ok",
            "data": {
                "userId": 390882,
                "photoFilename": "default-user.png",
                "name": "Polar",
                "lastName": "Bear"
    }
}


    beforeEach(() => {
        HomePage.visit();
        cy.get('.header_signin').click();

        const email = Cypress.env('site1_email');
        const password = Cypress.env('site1_password');

        SignInForm.login(email, password);
        cy.url().should('include', '/garage');
});
    
   
    context('Verify that the Profile Name is Polar Bear.', () => {
    
        it('Verify that the Profile Name is Polar Bear.', () => {
           cy.intercept('**api/users/profile', response)
           ProfilePage.visit();
           ProfilePage.profileName.should('contain.text', 'Polar Bear');
        });
        
      
    }); 

            
});
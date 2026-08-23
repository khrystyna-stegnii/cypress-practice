/// <reference types="cypress" />

import HomePage from '../../pom/pages/HomePage';
import SignInForm from '../../pom/forms/SignInForm';
import GaragePage from '../../pom/pages/GaragePage';
import AddCarForm from '../../pom/forms/AddCarForm';
import url from "../../test-data/url.json";
import EditCarForm from '../../pom/forms/EditCarForm';
import RemoveCarForm from '../../pom/forms/RemoveCarForm';
import AddExpenseForm from '../../pom/forms/AddExpenseForm';

describe('Add a car to the garage', () => {
    beforeEach(() => {
        HomePage.visit();
        cy.get('.header_signin').click();

        const email = Cypress.env('site1_email');
        const password = Cypress.env('site1_password');

        SignInForm.login(email, password);
        cy.url().should('include', '/garage');
});
    context('Add a Car ', () => {
    
         it('Verify that the Audi/A6 car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Audi');
            AddCarForm.selectCarModel('A6');
            AddCarForm.enterMileage('1005');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

          it('Verify that the Audi/Q7 car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Audi');
            AddCarForm.selectCarModel('Q7');
            AddCarForm.enterMileage('10000');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });
        
        it('Verify that the BMW/X5 car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('BMW');
            AddCarForm.selectCarModel('X5');
            AddCarForm.enterMileage('101');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

         it('Verify that the BMW/3 car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('BMW');
            AddCarForm.selectCarModel('3');
            AddCarForm.enterMileage('10');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

         it('Verify that the Ford/Focus car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Ford');
            AddCarForm.selectCarModel('Focus');
            AddCarForm.enterMileage('135');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

         it('Verify that the Ford/Sierra car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Ford');
            AddCarForm.selectCarModel('Sierra');
            AddCarForm.enterMileage('144');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

         it('Verify that the Porsche/Panamera car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Porsche');
            AddCarForm.selectCarModel('Panamera');
            AddCarForm.enterMileage('999');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

        it('Verify that the Porsche/911 car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Porsche');
            AddCarForm.selectCarModel('911');
            AddCarForm.enterMileage('8');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

        it('Verify that the Fiat/Panda car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Fiat');
            AddCarForm.selectCarModel('Panda');
            AddCarForm.enterMileage('5');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

        it('Verify that the Fiat/Punto car can be added', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Fiat');
            AddCarForm.selectCarModel('Punto');
            AddCarForm.enterMileage('500');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            
        });

       afterEach(() => {
            GaragePage.clickEditCarButton();
            EditCarForm.clickRemoveCarButton();
            RemoveCarForm.modalTitle.should('be.visible');
            RemoveCarForm.clickRemoveCarButton();
            RemoveCarForm.modalTitle.should('not.exist');
        });
    });

    context('Check validation for Mileage', () => {
    
         it('Verify that the car can not be added with Mileage as a negative value', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Audi');
            AddCarForm.selectCarModel('A8');
            AddCarForm.enterMileage('-10000');
            AddCarForm.addCarButton.should('be.disabled');
            AddCarForm.clickCloseAddCarFormButton();
            
        });
        
        it('Verify that the car can not be added with Mileage more that max', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('BMW');
            AddCarForm.selectCarModel('3');
            AddCarForm.enterMileage('10000000000000000');
            AddCarForm.addCarButton.should('be.disabled');
            AddCarForm.clickCloseAddCarFormButton();
            
        });

         
        it('Verify that the car can not be added with Mileage is empty', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Porsche');
            AddCarForm.selectCarModel('Cayenne');
            AddCarForm.addCarButton.should('be.disabled');
            AddCarForm.clickCloseAddCarFormButton();
            
        });
    }); 

    context('Adding fuel expenses', () => {
    
        it('Verify that fuel expenses can not be added if total cost is missing', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Audi');
            AddCarForm.selectCarModel('A6');
            AddCarForm.enterMileage('10');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            GaragePage.clickAddFuelExpenseButton();
            AddExpenseForm.enterTotalCost('4');
            AddExpenseForm.addExpenseButton.should('be.disabled');
            AddExpenseForm.clickCloseFormButton();
            
        });
        
       it('Verify that fuel expenses can not be added if number of liters is missing', () => {
            GaragePage.clickAddCarButton();
            AddCarForm.selectCarBrand('Audi');
            AddCarForm.selectCarModel('A6');
            AddCarForm.enterMileage('10');
            AddCarForm.clickAddCarButton();
            GaragePage.successfulCarAdding.should('be.visible');
            GaragePage.clickAddFuelExpenseButton();
            AddExpenseForm.enterNumberOfLiters('4');
            AddExpenseForm.addExpenseButton.should('be.disabled');
            AddExpenseForm.clickCloseFormButton();
            
        });

         afterEach(() => {
            GaragePage.clickEditCarButton();
            EditCarForm.clickRemoveCarButton();
            RemoveCarForm.modalTitle.should('be.visible');
            RemoveCarForm.clickRemoveCarButton();
            RemoveCarForm.modalTitle.should('not.exist');
        });
    }); 

            
});
/// <reference types="cypress" />

describe('Homepage', () => {
    it('Open homepage', () => {
    cy.visit('/');
    });

    context('Search elements on a homepage', () => {
        beforeEach(() => {
            cy.visit('/');
        });
        
        it('Get all buttons on header', () => {
            cy.get('button.btn.header-link');
            cy.get('button.header-link.-guest');
            cy.contains('button', 'Sign In');
            cy.get('header button').should('have.length', 4);
        });
        
        it('Get all links on footer', () => {
            cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]').should('be.visible');
            cy.get('a[href="https://t.me/ithillel_kyiv"]').should('be.visible');
            cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('be.visible');
            cy.get('a[href*="https://www.instagram.com/hillel_itschool/"]').should('be.visible');
            cy.get('a[href*="https://www.linkedin.com/school/ithillel/"]').should('be.visible');
            cy.get('div.col-md-6.d-flex.flex-column.align-items-center.align-items-md-end.justify-content-md-end.mb-2.mt-3.mt-md-0').find('a');
        });
    });
});
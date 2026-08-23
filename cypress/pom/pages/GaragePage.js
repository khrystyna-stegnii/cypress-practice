class GaragePage {
    get addCarButton() {
        return cy.get(
            'app-garage .panel-page_heading.d-flex.justify-content-between > button'
        );
    }

    get successfulCarAdding() {
        return cy.contains('div p', 'Car added');
    }

    get editCarButton() {
        return cy.get('app-garage .icon-edit');
    }

    get addFuelExpenseButton() {
        return cy.get('app-garage .car_add-expense.btn.btn-success');
    }

    visit() {
        cy.visit('/garage');
    }

    clickAddCarButton() {
        this.addCarButton
            .should('be.visible')
            .click();
    }

    clickEditCarButton() {
        this.editCarButton
            .last()
            .should('be.visible')
            .click();
    }

    clickAddFuelExpenseButton() {
        this.addFuelExpenseButton
            .last()
            .should('be.visible')
            .click();
    }
}

export default new GaragePage();
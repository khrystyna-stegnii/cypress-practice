class AddExpenseForm {
    get numberOfLiters() {
        return cy.get('#addExpenseLiters');
    }

    get totalCost() {
        return cy.get('#addExpenseTotalCost');
    }

    get addExpenseButton() {
        return cy.get('div.modal-footer.d-flex.justify-content-end > button.btn.btn-primary');
    }

    get closeFormButton() {
        return cy.get('div.modal-header > button');
    }

    enterNumberOfLiters(liters) {
        this.numberOfLiters.type(liters);
    }

    enterTotalCost(cost) {
        this.totalCost.type(cost);
    }
    
    clickCloseFormButton() {
        this.closeFormButton.should('be.visible').click();
    }
}

export default new AddExpenseForm();
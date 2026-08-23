class removeCarForm {
    get removeCarButton() {
        return cy.get('div.modal-footer.d-flex.justify-content-end > button.btn.btn-danger');
    }

    get modalTitle() {
        return cy.contains('h4.modal-title', 'Remove car');
    }
    clickRemoveCarButton() {
        this.removeCarButton.should('be.visible').click();
    }
}

export default new removeCarForm(); 
class EditCarForm {
    get removeCarButton() {
        return cy.get('div.modal-footer.d-flex.justify-content-between > button');
    }

    clickRemoveCarButton() {
        this.removeCarButton.should('be.visible').click();
    }
}

export default new EditCarForm();
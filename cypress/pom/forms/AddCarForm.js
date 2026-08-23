class AddCarForm {
    get carBrandDropdown() {
        return cy.get('#addCarBrand');
    }

    get carModelDropdown() {
        return cy.get('#addCarModel');
    }

    get mileageField() {
        return cy.get('#addCarMileage');
    }

    get addCarButton() {
    return cy.get('app-add-car-modal .modal-footer button.btn-primary');
    }

    get closeAddCarFormButton() {
        return cy.get('div.modal-header > button');
    }
   
    selectCarBrand(brand) {
        this.carBrandDropdown.select(brand);
    }

   
    selectCarModel(model) {
        this.carModelDropdown.select(model);
    }   

    enterMileage(mileage) {
        this.mileageField.type(mileage);
    }

    clickAddCarButton() {
        this.addCarButton.click();
    }

    clickCloseAddCarFormButton() {
        this.closeAddCarFormButton.should('be.visible').click();
    }
}

export default new AddCarForm();
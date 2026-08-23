class SignUpForm {

    get formTitle() {
        return cy.get('.modal-title');
    }

    get nameField() {
        return cy.get('#signupName');
    }
    
     get lastNameField() {
        return cy.get('#signupLastName');
    }

    get emailField() {
        return cy.get('#signupEmail');
    }

     get passwordField() {
        return cy.get('#signupPassword');
    }

     get reEnterPasswordField() {
        return cy.get('#signupRepeatPassword');
    }

     get registerButton() {
        return cy.get('app-signup-modal .btn.btn-primary');
    }

    get errorMessage() {
        return cy.get('div.invalid-feedback p');
    }

    enterName(name) {
        this.nameField.type(name);
    }

    blurName() {
        this.nameField.blur();
    }

    clearName() {
        this.nameField.clear();
    }

    enterLastName(lastName) {
        this.lastNameField.type(lastName);
    }

    blurLastName() {
        this.lastNameField.blur();
    }

    clearLastName() {
        this.lastNameField.clear();
    }
    enterEmail(email) {
        this.emailField.type(email);
    }

    blurEmail() {
        this.emailField.blur();
    }

    focusEmail() {
        this.emailField.focus();
    }

    enterPassword(password) {
        this.passwordField.type(password);
    }

    blurPassword() {
        this.passwordField.blur();
    }
    
    focusPassword() {
        this.passwordField.focus();
    }

    reEnterPassword(password) {
        this.reEnterPasswordField.type(password);
    }

    reEnterPasswordBlur() {
        this.reEnterPasswordField.blur();
    }

    reEnterPasswordFocus() {
        this.reEnterPasswordField.focus();
    }

    clickRegisterButton() {
        this.registerButton.click();
    }
}

export default new SignUpForm();
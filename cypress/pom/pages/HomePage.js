class HomePage{
    get signUpButton(){
        return cy.get('.btn-primary');
    }

    visit(){
        cy.visit('/');
    }

    openSignUpForm(){
        this.signUpButton.click();
    }
}

export default new HomePage();  
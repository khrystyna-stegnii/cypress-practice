class ProfilePage {

    get profileName() {
        return cy.get('.profile_name.display-4');
    }

     visit(){
        cy.visit('/panel/profile');
    }
}

export default new ProfilePage();
/// <reference types="cypress" />

describe('Get the brands', () => {
    
    context('Get the Brands', () => {
    
        it('Get all brands', () => {
            cy.request('GET', '/api/cars/brands').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length(5);
            expect(response.body.data[0].title).to.eq('Audi');
            expect(response.body.data[1].title).to.eq('BMW');
            expect(response.body.data[2].title).to.eq('Ford');
            expect(response.body.data[3].title).to.eq('Porsche');
            expect(response.body.data[4].title).to.eq('Fiat');
           });
        });

        it('Get Brand by Id', () => {
            cy.request('GET', '/api/cars/brands/1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.title).to.eq('Audi');
            expect(response.body.data.logoFilename).to.eq('audi.png');
           });
        });

         it('Get Brand by nonexisting Id', () => {
            cy.request({
                method: 'GET',
                url: '/api/cars/brands/999',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body.status).to.eq('error');
                expect(response.body.message).to.eq('No car brands found with this id');
            });
        });
        
      
    }); 

            
})
/// <reference types="cypress" />

describe('Add/update/delete the added car', () => {

    let sid;

    before(() => {
        cy.request('POST', '/api/auth/signin', {
            'email': Cypress.env('site1_email'),
            'password': Cypress.env('site1_password')
        }).then((response) => {
            expect(response.status).to.eq(200);
            sid = JSON.stringify(response.headers['set-cookie']).split(';')[0].split('=')[1];
            cy.log(sid);
        });
    });

    context('Add Audi/A6 car into the garage', () => {

        let carId;

        it('Add a car', () => {
            cy.request({
                method: 'POST',
                url: '/api/cars',
                body: {
                    'carBrandId': 1,
                    'carModelId': 4,
                    'mileage': 100
                },
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body.status).to.eq('ok');
                expect(response.body.data.carBrandId).to.eq(1);
                expect(response.body.data.carModelId).to.eq(4);
                expect(response.body.data.mileage).to.eq(100);
                expect(response.body.data.initialMileage).to.eq(100);
                expect(response.body.data.brand).to.eq('Audi');
                expect(response.body.data.model).to.eq('A6');

                carId = response.body.data.id;
            });
        });

        it('Get the created car', () => {
            cy.request({
                method: 'GET',
                url: `/api/cars/${carId}`,
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.status).to.eq('ok');
                expect(response.body.data.id).to.eq(carId);
                expect(response.body.data.carBrandId).to.eq(1);
                expect(response.body.data.carModelId).to.eq(4);
                expect(response.body.data.mileage).to.eq(100);
                expect(response.body.data.brand).to.eq('Audi');
                expect(response.body.data.model).to.eq('A6');
            });
        });

        it('Update the car mileage', () => {
            cy.request({
                method: 'PUT',
                url: `/api/cars/${carId}`,
                body: {
                    'carBrandId': 1,
                    'carModelId': 4,
                    'mileage': 123456
                },
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.status).to.eq('ok');
                expect(response.body.data.id).to.eq(carId);
                expect(response.body.data.carBrandId).to.eq(1);
                expect(response.body.data.carModelId).to.eq(4);
                expect(response.body.data.mileage).to.eq(123456);
            });
        });

        it('Update the car model to A8', () => {
            cy.request({
                method: 'PUT',
                url: `/api/cars/${carId}`,
                body: {
                    'carBrandId': 1,
                    'carModelId': 5,
                    'mileage': 123456
                },
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.status).to.eq('ok');
                expect(response.body.data.id).to.eq(carId);
                expect(response.body.data.carBrandId).to.eq(1);
                expect(response.body.data.carModelId).to.eq(5);
                expect(response.body.data.mileage).to.eq(123456);
                expect(response.body.data.model).to.eq('A8')
            });
        });

        it('Delete the added car', () => {
            cy.request({
                method: 'DELETE',
                url: `/api/cars/${carId}`,
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.status).to.eq('ok');
            });
        });

    });

});

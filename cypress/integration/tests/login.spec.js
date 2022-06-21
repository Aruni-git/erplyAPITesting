/// <reference types="cypress" />
it('Login to erply', () => {
    const requestBody = {
      "clientcode": "104572",
      "username": "testassignment",
      "password": "PosTestAssignment123"
    };

    cy.request("POST", "https://login.erply.com/", requestBody).should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
      }
    );
  
  })
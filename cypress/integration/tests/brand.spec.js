//Get the brands
it("GET - Get the brands", () => {
  cy.request({
    method: "GET",
    url: "/v1/brand",
    headers: {
      "Api-Token": "104572",
    }
  }).then((response) => {
    expect(response.status).to.equal(200)
    expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
  });
});

//Create a brand
it("POST - Create a brand", () => {
  cy.request({
    method: "POST",
    url: "/v1/brand",
    headers: {
      "Api-Token": "104572",
    },
    body: {
      "description": {
        "en": "Clothing brand"
      },
      "name": "Levis"
    },
  }).then((response) => {
    expect(response.status).to.equal(200)
    expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
  });
});

//Create brands in bulk
it("POST - Create brands in bulk", () => {
  cy.request({
    method: "POST",
    url: "/v1/brand/bulk",
    headers: {
      "Api-Token": "104572",
    },
    body: {
      "requests": [
        {
          "description": {
            "en": "It is a makeup brand"
          },
          "name": "MAC cosmetics"
        }
      ]
    }
  }).then((response) => {
    expect(response.status).to.equal(200)
    expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
  });
});

//Get brands in bulk
it("POST - Get brands in bulk", () => {
  cy.request({
    method: "POST",
    url: "/v1/brand/bulk/get",
    headers: {
      "Api-Token": "104572",
    },
    body: {     
          "filters": [
            {
              "fieldName": "group_id",
              "operandBefore": "or",
              "operator": "="
            }
          ],
          "paginationParameters": {
            "skip": 0,
            "take": 0
          },
          "sortingParameters": {
            "desc": true,
            "language": "en",
            "selector": "name"
          }
        }
  }).then((response) => {
    expect(response.status).to.equal(200)
    expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
  });
});

//Delete brands in bulk
it("DELETE - Delete Brands", () => {
  cy.request({
    method: "DELETE",
    url: "/v1/brand/73",
    headers: {
      "Api-Token": "104572",
    }  
  }).then((response) => {
    expect(response.status).to.equal(200)
    expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
  });
});

//update brand
it("PUT - Update brand", () => {
  cy.request({
    method: "PUT",
    url: "/v1/brand/73",
    headers: {
      "Api-Token": "104572",
    },
    body: {     
        "description": {
          "en": "This a mobile phone brand"
        },
        "name": "Samsung"      
    }
  }).then((response) => {
    expect(response.status).to.equal(200)
    expect(response).to.have.property('headers')
  expect(response).to.have.property('duration')
  });
});
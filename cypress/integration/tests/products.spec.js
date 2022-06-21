//Get the products
it("GET - Get the products", () => {
  cy.request({
    method: "GET",
    url: "/v1/product",
    headers: {
      "Api-Token": "104572",
    }
  }).then((res) => {
    expect(res.status).to.equal(200);
  });
});

//Set/update product code
it("PATCH - set/update product codes", () => {
  cy.request({
    method: "PATCH",
    url: "/v1/product/codes",
    headers: {
      "Api-Token": "104572",
    },
    requestBody: {
      nextCode: 1,
      nextCode2: 2,
    }
  }).then((res) => {
    expect(res.status).to.equal(200);
  });
});

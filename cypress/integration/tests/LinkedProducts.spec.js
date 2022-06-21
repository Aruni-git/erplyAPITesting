
//Update a link between 2 poducts
it("PUT - Update a link between 2 poducts", () => {
    cy.request({
      method: "PUT",
      url: "/v1/product/codes/v1/product/linked-products/72",
      headers: {
        "Api-Token": "104572",
      },
      requestBody: {
        linked_product_id: 0,
        product_id: 0,
      }
    }).then((res) => {
      expect(res.status).to.equal(200);
    });
  });
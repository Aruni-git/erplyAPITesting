//Create a Product Recipe
it("POST - Create a Product Recipe", () => {
  cy.request({
    method: "POST",
    url: "/v1/product/recipe",
    headers: {
      "Api-Token": "104572",
    },
    requestBody: {
      amount: 7,
      product_id: 77,
      product_id_component: 70,
    },
  }).then((res) => {
    expect(res.status).to.equal(200);
  });
});

//Delete Product Recipes
it("DELETE - Delete Product Recipes", () => {
  cy.request({
    method: "DELETE",
    url: "/v1/product/recipe/72",
    headers: {
      "Api-Token": "104572",
    },
  }).then((res) => {
    expect(res.status).to.equal(200);
  });
});

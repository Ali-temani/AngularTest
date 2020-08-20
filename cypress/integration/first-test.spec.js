describe("First test", () => {
  it("should visit home page", () => {
    cy.visit("http://localhost:4200");
    
  });

    it("should have nav for list", () => {
     cy.contains('List of images');
     cy.contains('list of favourites');
  });




    it("should visit list route for list", () => {
    cy.get('#listNav').click();
    cy.visit("http://localhost:4200/aa");
  
  });

    it("should visit list route for favourites", () => {
   
     cy.get('#favNav').click();
     cy.visit("http://localhost:4200/fav");
  });

    it("add button should work", () => {
   cy.visit("http://localhost:4200/aa");
     cy.get('#add').click();
     
  });
    it("remove button should work", () => {
   cy.visit("http://localhost:4200/fav");
     cy.get('#remove').click();
     
  });


});

/*
Cypress.Commands.add('request', () => {
  cy.request({
    method: 'GET',
    url: 'Url',
    
  }).then((response) => {
    localStorage.setItem('token', response.body);
  });
});
*/
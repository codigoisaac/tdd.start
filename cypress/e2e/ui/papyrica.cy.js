describe("Papyric App", () => {
  it("visits the app home", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(2);
      const titles = [...books].map((b) => b.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal(["Refactoring", "Domain-Driven Design"]);
    });
  });
});

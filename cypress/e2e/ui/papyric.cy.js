describe("Papyric App", () => {
  it("Shows the book list", () => {
    cy.visit("http://localhost:3000/");

    cy.get('div[data-test="book-list"]').should("exist");

    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);

      const titles = [...books].map(
        (book) => book.querySelector("h2").innerHTML
      );

      expect(titles).to.contain("Refactoring");
      expect(titles).to.contain("Domain-Driven Design");
      expect(titles).to.contain("Building Microsservices");
    });
  });
});

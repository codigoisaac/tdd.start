import { api } from "../../../src/services/api";

describe("Papyric App", () => {
  before(() => {
    // - empty the book list
    return api.delete("books?_cleanup=true").catch((error) => error);
  });

  beforeEach(() => {
    // - add books
    const books = [
      { name: "Refactoring", id: 1 },
      { name: "Domain-Driven Design", id: 2 },
      { name: "Building Microsservices", id: 3 }
    ];

    return books.map((book) =>
      api.post("books", book, {
        headers: { "Content-Type": "application/json" }
      })
    );
  });

  afterEach(() => {
    // - empty the book list
    return api.delete("books?_cleanup=true").catch((error) => error);
  });

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

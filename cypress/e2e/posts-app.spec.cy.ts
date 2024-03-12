describe("Posts App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });
  it("frontpage can be opened", () => {
    cy.contains("Posts App");
  });

  it("User can open edit mode, make some changes and save the changes", () => {
    cy.contains("Edit").click();
    cy.get("input:last").type("alejandro");
    cy.get("textarea").type("villegas");
    cy.contains("Save").click();
    cy.contains("alejandro");
  });

  it("Search by title function works well", () => {
    cy.get("input:first")
      .click()
      .type("ea molestias quasi exercitationem repellat qui ipsa sit aut");
    cy.get("button:first").click();
    cy.contains(
      "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    );
  });

  it("Search by Body function works well", () => {
    cy.get("select").select("Body");
    cy.get("input:first").click().type("rerum est autem sunt");
    cy.get("button:first").click();
    cy.contains(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });

  it("User can delete some note", () => {
    cy.contains(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
    cy.get(".btn-red:first").click();
    cy.get(".box-list").should(
      "not.contain",
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });

  it("User can filter by userId", () => {
    cy.get(".btn-user:first").click();
    cy.get(".btn-user:last").should("contain", "1");
  });

  it("User can go to login view", () => {
    cy.contains("Login").click();
    cy.contains("Did you forget your password?");
  });

  it("User can go to Login view to Posts view", () => {
    cy.contains("Login").click();
    cy.get(".btn-nav:last").click();
    cy.get("h1").should("contain", "Posts");
  });
});

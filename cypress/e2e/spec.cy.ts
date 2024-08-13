describe("Heading Text", () => {
  it("contains the correct title", () => {
    cy.visit("http://localhost:5173/")
      .get("h1")
      .invoke('text')
      .should("equal", "Pomodoro")
  })
})
/// <reference types="cypress" />

describe("Weather app basic tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173");
    });

    it("Check the weather in Dubai", () => {
        cy.get("#search-input").type("dubai{enter}");
        cy.get("#location").should("have.text", "Dubai, AE");
        cy.get("#current-temperature").should("exist");
        cy.get("#daily-forecast div").should("have.length", 6);
        cy.get("#hourly-forecast div").should("have.length", 12);
    });

    it("Check the theme switcher", () => {
        cy.get("#wrapper").should("have.class", "theme-light");
        cy.get("#theme-dark").click();
        cy.get("#wrapper").should("have.class", "theme-dark");
        cy.get("#theme-light").click();
        cy.get("#wrapper").should("have.class", "theme-light");
    });

    it("Check the unit switcher", () => {}); // TODO
    it("Check the language switcher", () => {}); // TODO
});

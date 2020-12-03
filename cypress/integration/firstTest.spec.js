/// <reference types="cypress" />;

describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Form").click();
    cy.contains("Form Layouts").click();

    //by Tag Name
    cy.get("input");

    //by Id
    cy.get("#inputEmail1");

    //by Class name
    cy.get(".input-full-width");

    //by Attribute name
    cy.get("[placeholder]");

    //by Attribute name and value
    cy.get("[placeholder='Email']");

    //by Class value
    cy.get("[class='input-full-width size-medium shape-rectangle']");

    //by Tag name and Attribute with value
    cy.get("input[placeholder='Email']");

    //by two different attributes
    cy.get("[placeholder='Email'][type='email']");

    //by tag name, Attribute with value, Id and Class name
    cy.get("input[placeholder='Email']#inputEmail1.input-full-width");

    //The most recommended way by Cypress
    cy.get("[data-cy='imputEmail1']");
  });

  it("second test", () => {
    cy.visit("/");
    cy.contains("Form").click();
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signInButton"]');

    cy.contains("Sign in");
    cy.contains("[status='warning']", "Sign in");

    //in case that you can't find any unique attribute on the signing button
    //use a parent element to find the target one
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });
});

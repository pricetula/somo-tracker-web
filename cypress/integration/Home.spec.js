/// <reference types="cypress" />

describe('Home', () => {
  it('render Home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The new page should contain an h1 with "About page"
    cy.get('a').contains('SomoTracker')
  })
})
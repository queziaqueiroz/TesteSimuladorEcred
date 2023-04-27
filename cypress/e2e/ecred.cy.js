describe('Validações simulado de credito', () => {

  beforeEach(() => {
    cy.visit('https://www.serasa.com.br/ecred/simulador/')
    cy.wait(1000)
  })

  it('Validar simulação de R$ 6.000,00', () => {
    cy.get('#slider-range[type=range]')
      .as ('range')
      .click()
      .invoke('val', 6000)
      .should('have.value', 6000)
      .trigger('change')
    // cy.get('#slider-range-month[type=range]')
    //   .as ('range').click()
    //   .invoke('val', 24)
    //   .should('have.value', 24)
    //   .trigger('change')
    cy.get('#amount')
    .should('have.value', 'R$ 6.000,00')
    cy.get('#month-amount')
      .should('have.value', '24 meses')
    cy.get('#month-amount-output')
    .should('have.value', '24x')
    cy.get('#price-number')
    .should('have.value', '347,89')
  })
})

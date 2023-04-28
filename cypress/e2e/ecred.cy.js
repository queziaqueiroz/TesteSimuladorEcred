describe('Validações simulado de credito', () => {

  beforeEach(() => {
    cy.visit('https://www.serasa.com.br/ecred/simulador/')
    cy.wait(1000)
  })

  it('Validar simulação de R$ 1.000,00', () => {
    cy.get('#slider-range[type=range]')
      .as ('range')
      .click()
      .invoke('val', 1000)
      .should('have.value', 1000)
      .trigger('change')
    // cy.get('#slider-range-month[type=range]')
    //   .as ('range').click()
    //   .invoke('val', 6)
    //   .should('have.value', 6)
    //   .trigger('change')
    cy.get('#amount')
    .should('have.value', 'R$ 1.000,00')
    cy.get('#month-amount')
      .should('have.value', '6 meses')
    cy.get('#month-amount-output')
    .should('have.value', '6x')
    cy.get('#price-number')
    .should('have.value', '271,27')
  })
})

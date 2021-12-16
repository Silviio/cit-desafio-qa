chai.use(require('chai-sorted'))

const URL = 'https://opentdb.com/browse.php'
const SEARCH_INPUT = '#query'
const SEARCH_BUTTON = '.btn-sm'
const ERROR_MESSAGE = '.alert.alert-danger'
const CATEGORIES_SELECT = '#type'
const PAGINATION = '.pagination'
const FIRST_COLUMN = 'tr td'
const LAST_COLUMN = 'tr td + td + td + td + td + td'
const CLICKABLE_SORTED_ICON = '.fa.fa-sort'

class SearchPage {
    
    static visit(){
        cy.visit(URL)
    }

    static typeInSearchField(searchWord){
        cy.get(SEARCH_INPUT).type(searchWord)
    }

    static pressSearchButton(){
        cy.get(SEARCH_BUTTON).click()
    }

    static shouldShowErrorMessage(errorMessage){
        cy.get(ERROR_MESSAGE).should('be.visible').and('contain', errorMessage)
    }

    static selectCategory(category){
        cy.get(CATEGORIES_SELECT).select(category)
    }

    static tableLengthShouldBeEqual(length){
        cy.get('tbody>tr').its('length').should('eq', length)
    }

    static shouldShowPagination(){
        cy.get(PAGINATION).should('be.visible')
    }

    static shouldNotShowPagination(){
        cy.get(PAGINATION).should('not.be.visible')
    }

    static pressSortedIcon(){
        cy.get(CLICKABLE_SORTED_ICON).click()
        cy.wait(1000)
    }

    static shouldShowAscendingSortedTable(){
        cy.get(FIRST_COLUMN)
          .then(($cells) => Cypress._.map($cells, 'innerText'))
          .then((strings) => Cypress._.map(strings, parseInt))
          .should('to.be.ascending')
    }

    static shouldContainItemCreatedByUser(user){
        cy.get(LAST_COLUMN).each(($el, index, $list) => {
            cy.wrap($el).contains(user)
          })
    }
     
}

export default SearchPage
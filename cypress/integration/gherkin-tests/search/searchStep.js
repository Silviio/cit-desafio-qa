import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import SearchPage from './searchPage'

Given('que navego para a página de busca do banco de {string}', category => {
    SearchPage.visit()
    SearchPage.selectCategory(category)
})

And('digito {string} no campo de busca', searchWord =>{
    SearchPage.typeInSearchField(searchWord)
})

When('clico no botão de buscar', () => {
    SearchPage.pressSearchButton()    
})

When('clico no icone de ordenação', () => {
    SearchPage.pressSortedIcon()
})

Then('visualizo uma mensagem de erro com texto {string}', errorMessage => {
    SearchPage.shouldShowErrorMessage(errorMessage)
})

Then('visualizo uma tabela de {int} itens', length => {
    SearchPage.tableLengthShouldBeEqual(length)
})

Then('visualizo uma tabela na ordem crescente', () => {
    SearchPage.shouldShowAscendingSortedTable()
})

And('com paginação', () => {
    SearchPage.shouldShowPagination()
})

And('contendo itens criados pelo usuário {string}', user => {
    SearchPage.shouldContainItemCreatedByUser(user)
})
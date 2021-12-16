Feature: Busca no Banco de Questões

    Scenario: Busca por questão inexistente
    Given que navego para a página de busca do banco de "Question"
    And digito "Science: Computers" no campo de busca
    When clico no botão de buscar
    Then visualizo uma mensagem de erro com texto "No questions found"

    Scenario: Busca por questão existente
    Given que navego para a página de busca do banco de "Category"
    And digito "Science: Computers" no campo de busca
    When clico no botão de buscar
    Then visualizo uma tabela de 25 itens
    And com paginação 

    Scenario: Busca pelo usuário com ordem crescente
    Given que navego para a página de busca do banco de "User"
    And digito "Coldflame" no campo de busca
    When clico no botão de buscar
    And clico no icone de ordenação
    Then visualizo uma tabela de 8 itens
    And contendo itens criados pelo usuário "Coldflame"
    
    
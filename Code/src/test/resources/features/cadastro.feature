Feature: Cadastro

  @Cadastro
  Scenario: Realizar o cadastro no google
    Given que estou na pagina de cadastro do google
    And preencho os dados de cadastro
      | nome  | sobrenome | email             | senha       | csenha      |
      | rfdse | perereira | baldiewedc2ekd345 | Tst@ando123 | Tst@ando123 |
    Then clicar no botao proxima
    And preencho as informacoes pessoais
      | dia | mes      | ano  | genero    |
      |   1 | Setembro | 1990 | Masculino |
    Then finalizo o cadastro

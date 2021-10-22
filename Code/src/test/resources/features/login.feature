Feature: Login
@Login
  Scenario: Realizar o login no google
    Given que estou na de login do google
    And preencho os dados para logar
      | usuario              | senha     |
      | fakerima18@gmail.com | henris123 |
    Then verifico se logou

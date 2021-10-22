@API
Feature: Numbers Api

	Background: 
		Given a api para realizar requisicao
    And valido o keytoken

  Scenario: Testar endpoint date
    And capturo o retorno do body da api date
    Then valido o status da requisicao 
    
    Scenario: Testar endpoint math
    And capturo o retorno do body da api math
    Then valido o status da requisicao 
    
    Scenario: Testar endpoint random
    And capturo o retorno do body da api random
    Then valido o status da requisicao 
    
    Scenario: Testar endpoint year
    And capturo o retorno do body da api year
    Then valido o status da requisicao 
    

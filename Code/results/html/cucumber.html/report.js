$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/cadastro.feature");
formatter.feature({
  "name": "Cadastro",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Realizar o cadastro no google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na pagina de cadastro do google",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.CadastroSteps.verificarPaginadeCadastroGoogle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho os dados de cadastro",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "steps.CadastroSteps.digitar_o_nome_para_cadastro(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao proxima",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CadastroSteps.clicar_no_botao_proxima()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho as informacoes pessoais",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "steps.CadastroSteps.preencho_as_informacoes_pessoais(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#day\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027DESKTOP-6ADVVH4\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.17 (a9d0719444d4b..., userDataDir: C:\\Users\\likin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51118}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2b26e3d923cb10557d2e643a6f2597c7\n*** Element info: {Using\u003did, value\u003dday}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat pages.CadastroPage.digitarDia(CadastroPage.java:84)\r\n\tat steps.CadastroSteps.preencho_as_informacoes_pessoais(CadastroSteps.java:44)\r\n\tat ✽.preencho as informacoes pessoais(file:///C:/Users/likin/Desktop/Code/Code/src/test/resources/features/cadastro.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "finalizo o cadastro",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.CadastroSteps.finalizo_o_cadastro()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Realizar o login no google",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que estou na de login do google",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginSteps.que_estou_na_de_login_do_google()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho os dados para logar",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginSteps.preencho_os_dados_para_logar(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027password\u0027]\"}\n  (Session info: chrome\u003d95.0.4638.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027DESKTOP-6ADVVH4\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.54, chrome: {chromedriverVersion: 95.0.4638.17 (a9d0719444d4b..., userDataDir: C:\\Users\\likin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51156}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d8d923c99724f9f62f2b70ad6cc47e53\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027password\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.digitarSenha(LoginPage.java:41)\r\n\tat steps.LoginSteps.preencho_os_dados_para_logar(LoginSteps.java:33)\r\n\tat ✽.preencho os dados para logar(file:///C:/Users/likin/Desktop/Code/Code/src/test/resources/features/login.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verifico se logou",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginSteps.verifico_se_logou()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/numbers.feature");
formatter.feature({
  "name": "Numbers Api",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a api para realizar requisicao",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.NumbersAPI.que_estou_testando_a_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o keytoken",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NumbersAPI.valido_o_keytoken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testar endpoint date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "capturo o retorno do body da api date",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NumbersAPI.capturo_o_retorno_do_body()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o status da requisicao",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.NumbersAPI.valido_o_status_da_requisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a api para realizar requisicao",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.NumbersAPI.que_estou_testando_a_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o keytoken",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NumbersAPI.valido_o_keytoken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testar endpoint math",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "capturo o retorno do body da api math",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NumbersAPI.capturo_o_retorno_do_math()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o status da requisicao",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.NumbersAPI.valido_o_status_da_requisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a api para realizar requisicao",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.NumbersAPI.que_estou_testando_a_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o keytoken",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NumbersAPI.valido_o_keytoken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testar endpoint random",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "capturo o retorno do body da api random",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NumbersAPI.capturo_o_retorno_do_random()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o status da requisicao",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.NumbersAPI.valido_o_status_da_requisicao()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "a api para realizar requisicao",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.NumbersAPI.que_estou_testando_a_api()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o keytoken",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NumbersAPI.valido_o_keytoken()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testar endpoint year",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@API"
    }
  ]
});
formatter.step({
  "name": "capturo o retorno do body da api year",
  "keyword": "And "
});
formatter.match({
  "location": "steps.NumbersAPI.capturo_o_retorno_do_year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valido o status da requisicao",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.NumbersAPI.valido_o_status_da_requisicao()"
});
formatter.result({
  "status": "passed"
});
});
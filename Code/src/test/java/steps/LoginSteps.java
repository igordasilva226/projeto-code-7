package steps;

import java.util.Collection;
import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.LoginPage;
import utils.CodeBase;

public class LoginSteps extends CodeBase {
	
	LoginPage login;

	
	@Given("que estou na de login do google")
	public void que_estou_na_de_login_do_google() {
		login = new LoginPage();
		login.verificarTxtLogin();
	}


	@And("preencho os dados para logar")
	public void preencho_os_dados_para_logar(DataTable dados) {
		for(Map<Object, Object> data : dados.asMaps(String.class, String.class)) {; 
		login = new LoginPage();
		login.digitarEmail((String)data.get("usuario"));
		login.clicarBtnSeguinte();
		login.digitarSenha((String)data.get("senha"));
		login.clicarBtnSeguinte();
	}
	}

	@Then("verifico se logou")
	public void verifico_se_logou() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


}

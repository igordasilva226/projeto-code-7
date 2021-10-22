
package steps;

import java.util.Map;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.CadastroPage;
import utils.CodeBase;

public class CadastroSteps extends CodeBase {
	
	CadastroPage cadastro;


	@Given("que estou na pagina de cadastro do google")
	public void verificarPaginadeCadastroGoogle() {
		cadastro = new CadastroPage();
		cadastro.verificarSite();
	}


	@And("preencho os dados de cadastro")
	public void digitar_o_nome_para_cadastro(DataTable dados) {
		for(Map<Object, Object> data : dados.asMaps(String.class, String.class)) {
		cadastro = new CadastroPage();
		cadastro.digitarNome((String) data.get("nome"));
		cadastro.digitarSobrenome((String) data.get("sobrenome"));
		cadastro.digitarEmail((String) data.get("email"));
		cadastro.digitarSenha((String) data.get("senha"));
		cadastro.digitarCSenha((String) data.get("csenha"));
	  }
	}
	@Then("clicar no botao proxima")
	public void clicar_no_botao_proxima() {
		 cadastro.clicarBtnProxima();
		}
	
	@And("preencho as informacoes pessoais")
	public void preencho_as_informacoes_pessoais(DataTable dados) {
		for(Map<Object, Object> data : dados.asMaps(String.class, String.class)) {
			cadastro.digitarDia((String) data.get("dia"));
			cadastro.selectMes((String) data.get("mes"));
			cadastro.digitarAno((String) data.get("ano"));
			cadastro.selectGenero((String) data.get("genero"));
			cadastro.clicarBtnProxima();
		}
	}
	
	@Then("finalizo o cadastro")
		public void finalizo_o_cadastro() {
		cadastro.clickTermosEPrivacidade();
		cadastro.clicarBtnProxima();
	}
	
		
	}

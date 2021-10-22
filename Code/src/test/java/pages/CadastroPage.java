package pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import utils.CodeBase;

public class CadastroPage extends CodeBase {

	@FindBy(xpath = "//h1[@class = 'ahT6S  y77zqe']//span")
	WebElement txtCriar;
	
	@FindBy(how=How.ID, using="firstName")
	WebElement nomeCadastro;
	
	@FindBy(id = "lastName")
	WebElement sobrenomeCadastro;
	
	@FindBy(id = "username")
	WebElement emailCadastro;
	
	@FindBy(xpath = "//input[@name = 'Passwd']")
	WebElement senhaCadastro;
	
	@FindBy(xpath = "//input[@name = 'ConfirmPasswd']")
	WebElement cSenhaCadastro;
	
	@FindBy(xpath = "//button[@class = 'VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b']")
	WebElement btnProxima;
	
	@FindBy(id = "day")
	WebElement dia;
	
	@FindBy(id = "month")
	WebElement mes;
	
	@FindBy(id = "year")
	WebElement ano;
	
	@FindBy(id = "gender")
	WebElement genero;
	
	@FindBy(id = "c8")
	WebElement inputTermos;
	
	@FindBy(id = "c12")
	WebElement inputPrivacidade;
	
	
	
	public CadastroPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void digitarNome(String nome) {
		nomeCadastro.sendKeys(nome);
	}
	
	public void digitarSobrenome(String sobrenome) {
		sobrenomeCadastro.sendKeys(sobrenome);
	}
	
	public void digitarEmail(String email) {
		emailCadastro.sendKeys(email);
	}
	
	public void digitarSenha(String senha) {
		senhaCadastro.sendKeys(senha);
	}
	
	public void digitarCSenha(String csenha) {
		cSenhaCadastro.sendKeys(csenha);
	}
	
	public void clicarBtnProxima () {
		btnProxima.click();
	}
	
	public void digitarDia(String diaNascimento) {
		dia.sendKeys(diaNascimento);
	}
	
	
	public void digitarAno (String anoNascimento) {
		ano.sendKeys(anoNascimento);
	}
	
	public void selectMes(String mesNascimento) {
		Select dropDown = new Select(mes);
		dropDown.selectByVisibleText(mesNascimento);
	}
	
	public void selectGenero(String generoCadastro) {
		Select dropDown = new Select(genero);
		dropDown.selectByVisibleText(generoCadastro);
	}
	
	public void clickTermosEPrivacidade () {
		inputTermos.click();
		inputPrivacidade.click();
	}
	
	public void verificarSite () {
		String texto = txtCriar.getText();
		String esperado = "Criar sua Conta do Google";
		Assert.assertEquals(texto, esperado);	
	}
	
	
}

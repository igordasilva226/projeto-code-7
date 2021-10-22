package pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import utils.CodeBase;

public class LoginPage extends CodeBase {
	
	@FindBy (xpath = "//h1[@class='ahT6S ']//span")
	WebElement txtLogin;

	@FindBy (id = "identifierId")
	WebElement emailUser;
	
	@FindBy (xpath = "//button[@class = 'VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b']")
	WebElement btnSeguinte;
	
	@FindBy (xpath = "//input[@name='password']")
	WebElement senhaUser;
	
	@FindBy(xpath = "//img[@class = 'gb_Ca gbii']")
	WebElement btnUser;
	
	@FindBy (xpath = "//div[@class = 'gb_nb']")
	WebElement txtEmail;
	
	public LoginPage () {
		PageFactory.initElements(driver, this);
	}
	
	
	public void digitarEmail (String email) {
		emailUser.sendKeys(email);
	}
	
	public void digitarSenha (String senha) {
		senhaUser.sendKeys(senha);
	}
	
	public void clicarBtnSeguinte () {
		btnSeguinte.click();
	}
	
	public void verificarTxtLogin () {
		String texto = txtLogin.getText();
		String esperado = "Fazer login";
		Assert.assertEquals(texto, esperado);
	}
	
	
}

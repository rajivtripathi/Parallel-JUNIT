package parallel;


import io.cucumber.core.api.Scenario;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import org.openqa.selenium.WebDriver;

import baseUtil.Base;
import pageLayer.DashBoard;
import pageLayer.LoginPage;




public class StepDefinition extends Base {
		
	public LoginPage lp ;
	public DashBoard db ;
	
   @Before
	public void ScenarioName(Scenario scenario) {
		
		System.out.println("===Scenario Name is: ==="+scenario.getName());
		
	}
	
@Given("^user is launching admin demo url$")
	public void user_is_launching_admin_demo_url() throws Throwable {		
		lp=new LoginPage(driver);
		lp.openBrowser();

	}

	@When("^user is able to login successfully with valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_is_able_to_login_successfully_with_valid_and(String username, String pwd) throws Throwable {
		lp=new LoginPage(driver);
		lp.Login(username, pwd);
	}

	@Then("^user is on DashBoard$")
	public void user_is_on_DashBoard() throws Throwable {
		
		System.out.println("--user is on DashBoard--");

	}

	@Then("^user is successfully logout$")
	public void user_is_successfully_logout() throws Throwable {

		System.out.println("---user clicks on logout link--");
		DashBoard db=new DashBoard(driver);
		db.logout();
		System.out.println("---user successfully logout--");
	}

	
	
}

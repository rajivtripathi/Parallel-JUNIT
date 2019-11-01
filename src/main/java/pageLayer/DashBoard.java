package pageLayer;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashBoard {
	
	
	
	 public DashBoard(WebDriver driver) {	 
			
			//ldriver=rdriver;
			PageFactory.initElements(driver, this);			 
		 }
	 
	 
	 @FindBy(xpath="//*[contains(text(),'Logout')]")
	 WebElement logouttxt;
	 
	 public DashBoard logout() throws Throwable {
		 
		 Thread.sleep(5000);
		 logouttxt.click();
		 return this;
	 }

}

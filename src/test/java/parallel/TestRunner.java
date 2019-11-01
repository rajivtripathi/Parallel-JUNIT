package parallel;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features",
        glue = "parallel",	
        monochrome= true,
        dryRun=false,
		plugin = {"pretty", "html:test-output/cucumber-htmlreport", "json:test-output/cucumber-report.json"}
	)
         
        
public class TestRunner {
	
	
	

}

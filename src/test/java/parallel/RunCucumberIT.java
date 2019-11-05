package parallel;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/test.feature",
        glue = "parallel",	
        monochrome= true,
        dryRun=false,
		plugin = {"pretty", "html:test-output1/cucumber-htmlreport", "json:test-output1/cucumber-report.json"}
	)
         
        
public class RunCucumberIT {
	
	
	

}

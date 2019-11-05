$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test2.feature");
formatter.feature({
  "name": "Login Feature- Admin area demo -Feature 2",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Scenario 3",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is launching admin demo url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_launching_admin_demo_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on DashBoard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_DashBoard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario 4",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is launching admin demo url",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_launching_admin_demo_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on DashBoard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_DashBoard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "passed"
});
});
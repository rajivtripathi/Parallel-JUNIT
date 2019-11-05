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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Logout\u0027)]\"}\n  (Session info: chrome\u003d78.0.3904.87)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJIV\u0027, ip: \u0027192.168.30.2\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.87, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\Rajiv\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64444}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 36c301c6c50c961a65a67e4b23ee334a\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Logout\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageLayer.DashBoard.logout(DashBoard.java:25)\r\n\tat parallel.StepDefinition.user_is_successfully_logout(StepDefinition.java:56)\r\n\tat ✽.user is successfully logout(file:src/test/resources/features/test2.feature:8)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Logout\u0027)]\"}\n  (Session info: chrome\u003d78.0.3904.87)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJIV\u0027, ip: \u0027192.168.30.2\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.87, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\Rajiv\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3388f5df74c4238c30b46e2172833416\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Logout\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageLayer.DashBoard.logout(DashBoard.java:25)\r\n\tat parallel.StepDefinition.user_is_successfully_logout(StepDefinition.java:56)\r\n\tat ✽.user is successfully logout(file:src/test/resources/features/test2.feature:16)\r\n",
  "status": "failed"
});
});
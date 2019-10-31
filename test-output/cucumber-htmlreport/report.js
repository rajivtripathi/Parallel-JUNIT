$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "Login Feature- Admin area demo -Feature 1",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Scenario 1",
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d77.0.3865.120)\n  (Driver info: chromedriver\u003d2.24.417431 (9aea000394714d2fbb20850021f6204f2256b9cf),platform\u003dWindows NT 6.2.9200 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RAJIV\u0027, ip: \u0027192.168.30.2\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.24.417431 (9aea000394714d..., userDataDir: C:\\Users\\Rajiv\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, version: 77.0.3865.120, webStorageEnabled: true}\nSession ID: 2652d0e504168b38ece71f6694e11197\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:836)\r\n\tat baseUtil.Base.openBrowser(Base.java:58)\r\n\tat stepDefinition.StepDefinition.user_is_launching_admin_demo_url(StepDefinition.java:29)\r\n\tat ✽.user is launching admin demo url(file:src/test/resources/features/test.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on DashBoard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_DashBoard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Scenario 2",
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d77.0.3865.120)\n  (Driver info: chromedriver\u003d2.24.417431 (9aea000394714d2fbb20850021f6204f2256b9cf),platform\u003dWindows NT 6.2.9200 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027RAJIV\u0027, ip: \u0027192.168.30.2\u0027, os.name: \u0027Windows 8\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.2\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.24.417431 (9aea000394714d..., userDataDir: C:\\Users\\Rajiv\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, takesHeapSnapshot: true, takesScreenshot: true, version: 77.0.3865.120, webStorageEnabled: true}\nSession ID: 748ee88c93ae6aa0c387c8903d9d255d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:836)\r\n\tat baseUtil.Base.openBrowser(Base.java:58)\r\n\tat stepDefinition.StepDefinition.user_is_launching_admin_demo_url(StepDefinition.java:29)\r\n\tat ✽.user is launching admin demo url(file:src/test/resources/features/test.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on DashBoard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_DashBoard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/yahooTesting.feature");
formatter.feature({
  "name": "Yahoo Login Feature -2",
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
  "name": "user is launching yahoo url carsguide",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on yahoo home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user is launching yahoo url carsguide",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is able to login successfully with valid \"admin@yourstore.com\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_is_able_to_login_successfully_with_valid_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on yahoo home page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is successfully logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_successfully_logout()"
});
formatter.result({
  "status": "skipped"
});
});
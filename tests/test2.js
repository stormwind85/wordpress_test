casper.test.begin('test', function testLogin(test) {
	var x = require("casper").selectXPath;
	casper.start('http://localhost:8000/wp-admin/', function() {
		this.waitForSelector('body');
	});
	casper.then(function() {
		this.fill('form[action="http://localhost:8000/wp-login.php"]', {
			"log": "abrechet",
			"pwd": "CBeDFBdmuYgd^k5gS0"
		}, true);
		if(this.evaluate(function () {return document.getElementById("#rememberme").checked === false;} )) {
			this.click("#rememberme");
		}
	});
	casper.then(function() {
		this.test.assertExists(x('//input[@id="wp-submit"]'), 'the element exists');
	});
	casper.run(function() {
		test.done();
	});
});
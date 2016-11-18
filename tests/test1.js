casper.test.begin('test', function testSubmitComment(test) {
	var x = require("casper").selectXPath;
	casper.start('http://localhost:8000', function() {
		this.waitForSelector('body');
	});
	casper.then(function() {
		casper.start('http://localhost:8000/?p=12', function() {
			this.test.assertExists(x('//a[@href="http://localhost:8000/?p=12"]'), 'the link exists');
		});
		casper.then(function() {
			this.fill('form[action="http://localhost:8000/wp-comments-post.php"]', {
				"comment": "Ceci est un commentaire",
				"author": "name_test",
				"email": "abrechet@hipay.com"
			}, true);
		});
		casper.then(function() {
			casper.start('http://localhost:8000/?p=12', function() {
				this.test.assertExists(x('//input[@id="submit"]'), 'the element exists');
			});
		});
	});
	casper.run(function() {
		test.done();
	});
});
/*var test2 = document.createElement('script');
test2.src = './test2.js';
document.head.appendChild(test2);
*/
window.document.write("<script type='text/javascript' src='test2.js'></script>" );
casper.test.begin('test', function testLogout(test) {
	var x = require("casper").selectXPath;
	casper.start('http://localhost:8000/wp-admin/', function() {
		this.waitForSelector('body');
	});
	casper.then(function() {
		if (this.exists('#wp-admin-bar-my-account')) {
			this.mouse.move("#wp-admin-bar-my-account");
			if(this.exists('#wp-admin-bar-logout')) {
				this.test.assertExists(x('//li[@id="wp-admin-bar-logout"]'), 'the element exists');
				this.click('#wp-admin-bar-logout');
			}
		}
		else {
			this.echo('Element profile doesn\'t exist');
		}

	});
	casper.run(function() {
		test.done();
	});
});
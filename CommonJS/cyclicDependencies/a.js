const b = require('./b');

function foo() {
	b.bar();
	console.log('a');
}

exports.foo = foo;

const a = require('./a'); // (i)

function bar() {
	if (Math.random()) {
		a.foo(); // (ii)
		console.log('b');
	}
}

exports.bar = bar;

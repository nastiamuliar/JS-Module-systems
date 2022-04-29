require.config({
	paths: {
		'underscore': 'vendor/underscore-umd-min',
	}
});

// Array
require(['helper/array', 'helper/data'], function(Array, data) {
	const arr = new Array(data.arr);
	const mappedArray = arr.map((num) => num * 2 );

	console.log('ARRAY');
	console.log(mappedArray.toObject());
	mappedArray.forEach((el) => console.log(el));
});

// Object
require(['helper/object', 'helper/data'], function(Object, data) {
	const obj = new Object(data.obj);
	const keys = obj.keys();
	const values = obj.values();

	console.log('OBJECT');
	console.log(keys, values);
	keys.forEach((el) => console.log(el))
});

// Counter v1
require(['helper/counter'], function (counter) {
	console.log('COUNTER');
	// The imported value is a (disconnected) copy
	console.log(counter.value); // 5
	counter.increase();
	console.log(counter.value); // 5

	// The imported value can be changed
	counter.value++;
	console.log(counter.value); // 6
});

// Counter v2
// define(['helper/utils', 'require'], function (directories, require) {
// 	const counter = require(directories.counter);
// console.log('COUNTER');
// 	// The imported value is a (disconnected) copy
// 	console.log(counter.value); // 5
// 	counter.increase();
// 	console.log(counter.value); // 5
//
// 	// The imported value can be changed
// 	counter.value++;
// 	console.log(counter.value); // 6
// });




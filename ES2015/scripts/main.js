import data from './helper/data.js';

// Array
import Array from './helper/array.js';
const arr = new Array(data.arr);
const mappedArray = arr.map((num) => num * 2 );

console.log('ARRAY');
console.log(mappedArray.toObject());
mappedArray.forEach((el) => console.log(el));

// Object
import dir from './helper/utils.js';
import(dir.object)
	.then(({ default: Object }) => {
		const obj = new Object(data.obj);
		const keys = obj.keys();
		const values = obj.values();

		console.log('OBJECT');
		console.log(values);
		keys.forEach((el) => console.log(el));
	});

// Counter v1
import { counter, increase } from './helper/counter.js';

console.log('COUNTER');
// The imported value is a (disconnected) copy
console.log(counter); // 5
increase();
console.log(counter); // 6

// Counter v2
// import * as m from './helper/counter.js';
//
// console.log('COUNTER');
// console.log(m.counter); // 5
// m.counter++;
// console.log(m.counter); // 5





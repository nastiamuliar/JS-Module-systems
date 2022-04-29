const data = require('./helper/data');

// Array
const Array = require('./helper/array');

const arr = new Array(data.arr);
const mappedArray = arr.map((num) => num * 2 );

console.log('ARRAY');
console.log(mappedArray.toObject());
mappedArray.forEach((el) => console.log(el));

// Object
const { Object } = require('./helper/object');

const obj = new Object(data.obj);
const keys = obj.keys();
const values = obj.values();

console.log('OBJECT');
console.log(values);
keys.forEach((el) => console.log(el));

// Counter v1
const counter = require('./helper/counter').value;
const increaseCounter = require('./helper/counter').increase;

console.log('COUNTER');
console.log(counter); // 3
increaseCounter();
console.log(counter); // 3

// Counter v2
// const counter = require('./helper/counter');
//
// console.log('COUNTER');
// // The imported value is a (disconnected) copy
// console.log(counter.value); // 3
// counter.increase();
// console.log(counter.value); // 3
//
// // The imported value can be changed
// counter.value++;
// console.log(counter.value); // 4




import _ from '../vendor/underscore-esm-min.js';
import Object  from './object.js';

const Array = class {
	constructor(values) {
		this.values = values;
	}

	toObject() {
		const obj = _.object(this.values, this.values);
		obj.__proto__ = new Object(obj);

		return obj
	}

	forEach(iteratee) {
		_.each(this.values, iteratee)
	}

	map(callback) {
		const values = _.map(this.values, callback);
		values.__proto__ = new Array(values);
		this.values = values;

		return this.values;
	}
};

export default Array;

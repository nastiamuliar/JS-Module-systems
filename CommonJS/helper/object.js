const _ = require('../vendor/underscore-umd-min');

exports.Object = function(value) {
	this.value = value;

	this.keys = function () {
		const keys = _.keys(this.value);

		return keys;
	};

	this.values = function () {
		const values = _.values(this.value);
		this.values = values;

		return this.values;
	};
};

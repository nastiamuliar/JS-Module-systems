define(['underscore', 'helper/array'], function (_, Array) {
	function Object(value) {
		this.value = value;

		this.keys = function () {
			const keys = _.keys(this.value);
			keys.__proto__ = new Array(keys);

			return keys;
		};

		this.values = function () {
			const values = _.values(this.value);
			this.values = values;

			return this.values;
		};
	}

	return Object;
});

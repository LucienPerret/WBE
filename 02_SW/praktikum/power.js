const power = function (x, n) {
	if (typeof x == "bigint" && typeof n == "bigint") {
		if (n == 0n) {
			return 1n;
		} else if (n % 2n == 0n) {
			y = power(x, n / 2n);
			return y * y;
		} else {
			return x * power(x, n - 1n);
		}
	} else {
		assert(
			Number.isInteger(x) && Number.isInteger(n),
			"Input must be integers",
		);
		if (n == 0) {
			return 1;
		} else if (n % 2 == 0) {
			y = power(x, n / 2);
			return y * y;
		} else {
			return x * power(x, n - 1);
		}
	}
};
const assert = function (condition, message) {
	if (!condition) throw new Error(message || "Assertion failed");
};
module.exports = { power };

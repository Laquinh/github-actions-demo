const { add, subtract } = require('../script');

test(
	'adds two numbers correctly',
	() => {
		expect(add(3, 4)).toBe(7);
		expect(add(4, 3)).toBe(7);
	}
);

test(
	'subtracts two numbers correctly',
	() => {
		expect(subtract(3, 4)).toBe(-1);
		expect(subtract(4, 3)).toBe(1);
	}
);

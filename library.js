const add = function(a, b)
{
	return a + b;
}

const subtract = function(a, b)
{
	return a - b;
}

if (typeof module !== 'undefined' && module.exports)
{
	module.exports = { add, subtract };
}
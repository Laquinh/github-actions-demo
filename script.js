const add = function(a, b)
{
	return a + b;
}

const subtract = function(a, b)
{
	return a - b;
}

document.getElementById('change-text').onclick = function()
{
	document.querySelector('h1').innerText = "2 - 1 = " + subtract(2, 1);
};

if (typeof module !== 'undefined' && module.exports)
{
	module.exports = { add, subtract };
}
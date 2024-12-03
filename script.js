const { add, subtract } = require('./library');

document.getElementById('change-text').onclick = function()
{
	document.querySelector('h1').innerText = "2 - 1 = " + subtract(2, 1);
};

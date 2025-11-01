function showDiff (a, b) {
	result = a < b ? b-a : a-b;
	
	console.log("Разница: " + result);
}

function isWord (str) {
	result = str.includes(" ") ? false : true;
	
	console.log("Одно слово? " + result);
}

function pow(a, x) {
	
	result = Math.pow(a, x);
	
	console.log ("a в степени x: " + result);
}
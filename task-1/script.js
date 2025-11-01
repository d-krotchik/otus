function printSum (a, b) {
	console.log ("Сумма чисел: "+ a + b);
}

function printMultiplication (a, b) {
	console.log ("Произведение чисел: "+ a * b);
}

function printSumStr (str1, str2) {
	console.log ("Количество символов: " + (str1.length + str2.length));
}

function printUserSum () {
	let num = prompt("Введите трёхзначное число");
	
	let result = 0;
	let toStr = String(num);
	
	for (let i=0; i < num.length; i++) {
		result += Number(num[i])
	}
	
	console.log ("Сумма чисел пользовательского числа: "+ result);
}
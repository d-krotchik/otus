function sum (a, b) {
	console.log ("Сумма чисел: "+ a + b);
}

function multiplication (a, b) {
	console.log ("Произведение чисел: "+ a * b);
}

function sumStr (str1, str2) {
	console.log ("Количество символов: " + (str1.length + str2.length));
}

function userSum () {
	let num = prompt("Введите трёхзначное число");
	
	let result = 0;
	let toStr = String(num);
	
	for (let i=0; i < num.length; i++) {
		result += Number(num[i])
	}
	
	console.log ("Сумма чисел пользовательского числа: "+ result);
}
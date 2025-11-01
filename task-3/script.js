function printSum () {
	let sum = 0;
	for (let i = 50; i <= 100; i++) {
		sum += i;
	}
	console.log("Сумма: " + sum);
}

function printMultiple () {
	console.log("Таблица умножения на 7:");
	for (let i = 1; i <= 10; i++) {
		console.log(`7 x ${i} = ${7 * i}`);
	}
}
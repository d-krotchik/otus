function checkTiangle (a, b, c) {
	let arr = [a, b, c];
  let arrByBiggest = arr.sort((a, b) => a - b);

  let result = Math.pow(arrByBiggest[0], 2) + Math.pow(arrByBiggest[1], 2) === Math.pow(arrByBiggest[2], 2);

  console.log("Прямоуголный ли треугольник? " + result);
}


function checkRound (r) {
	let lengthOfCircle = 2 * 3.14 * r;
	let squareOfCircle = (Math.pow(r, 2) * 3,14);
	
	console.log(`Длина: ${lengthOfCircle}`, `Площадь: ${squareOfCircle}`);
}
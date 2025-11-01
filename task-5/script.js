let arr = [1,2,3,4,5,6,7,8,9,11];

function showArrSum () {
	
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	
	console.log("Сумма: " + result);
}

function showArrMultiple () {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i] * 2);
	}
	
	console.log("Значения вдвое больше: " + result);
}
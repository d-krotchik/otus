function checkString (str) {
	const dateTest = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
	const mailTest = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
	
	if (dateTest.test(str)) {
		console.log("Дата");
	} else if (mailTest.test(str)) {
		console.log("Почта");
	} else {
		console.log ("Просто текст");
	}
	
}
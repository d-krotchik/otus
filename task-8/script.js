function showDay () {
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
	let date = prompt("Введите дату в формате ДД.ММ.ГГГГ")
	date = new Date(date);
	
	console.log ("День недели: " +  days[date.getDay()]);
}


function showMinutesFromStart () {
	let now = new Date();
	console.log("Прошло минут: " + now.getHours() * 60 + now.getMinutes());
}
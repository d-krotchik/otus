function userObject () {
	let user = {
		name: "John"
	}
	
	let age = prompt('Возраст');
	user.age = age;
	
	let admin = user;
	admin.role = "admin";
	
	console.log(admin, user);
}
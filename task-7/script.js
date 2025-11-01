document.addEventListener('DOMContentLoaded', function(){
	let input = document.querySelector('[data-name="new-paragraph-text"]');
	let button = document.querySelector('[data-name="new-paragraph-button"]');
	let container = document.querySelector('[data-name="container"]');
	
	input.addEventListener('input', function() {
		if (this.value.trim() != "") { 
			button.removeAttribute("hidden");
		} else {
			button.setAttribute("hidden", "hidden");
		}
	});
	
	button.onclick  = function() {
		let inputText = input.value;
		let paragraph = document.createElement('p');
		paragraph.innerHTML = inputText;
		container.prepend(paragraph);
	};
	
});

const MORE = document.querySelector(".more_btn");
let postIndex = 1;

MORE.addEventListener("click", function(){

	const DISPLAY = document.querySelector(".hidden-post")
	DISPLAY.classList.remove("d-none")

	postIndex++;
	
})
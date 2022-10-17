const MORE = document.querySelector(".more_btn");

let moreIndex = 1;
MORE.addEventListener("click", function(){
	console.log("tloqkf")
	const INNER = document.querySelector(".inner");
	
	let increase = 1000 + (500 * moreIndex);
	
	INNER.style.height = increase + "px";
	
	moreIndex++;

	
})

let postIndex = 1;

const NEXT = document.querySelector(".next");

	NEXT.addEventListener("click", function(){
		
		const PAST = document.querySelector(".btn_wrap>li:nth-child("+(postIndex)+")");
		PAST.classList.remove("now")
		
		postIndex++;
		
		const POSTS = document.querySelector("#posts");
		if(postIndex >= 6) postIndex = 1;
					
		let coord = -1920 * (postIndex-1);
		POSTS.style.marginLeft = coord + "px";
		
		const NOW = document.querySelector(".btn_wrap>li:nth-child("+postIndex+")");
		NOW.classList.add("now");
	
})

const PREV = document.querySelector(".prev");

	PREV.addEventListener("click", function(){
	
		const PAST = document.querySelector(".btn_wrap>li:nth-child("+(postIndex)+")"); //postindex 증가 전
		PAST.classList.remove("now")
		
		postIndex--;
		const POSTS = document.querySelector("#posts");
					
		if(postIndex <= 0) postIndex = 5;
				
				
					
		let coord = -1920 * (postIndex-1);
		POSTS.style.marginLeft = coord + "px";
		
		const NOW = document.querySelector(".btn_wrap>li:nth-child("+postIndex+")"); // postinder 증가 후
		NOW.classList.add("now");				
})










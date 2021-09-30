document.addEventListener("DOMContentLoaded", function(){
	$(".flag").on("click", toggleFlag);
});

function toggleFlag(){
	let toHide = document.querySelector(".flag.selected");
	let toShow = document.querySelector(".flag:not(.selected)");
	toHide.classList.remove("selected");
	toShow.classList.add("selected");
}

function toggleMobileNav(){
	let rightNav = document.querySelector(".right-nav");
	let crossSvg = document.querySelector(".burger-menu .cross-svg");
	let burgerSvg = document.querySelector(".burger-menu .burger-svg");

	if(rightNav.style.display == "flex"){
		rightNav.style.display = null;
		crossSvg.style.display = null;
		burgerSvg.style.display = null;
	}else{
		rightNav.style.display = "flex";
		crossSvg.style.display = "inline";
		burgerSvg.style.display = "none";
	}
}

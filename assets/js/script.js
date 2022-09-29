const toggleFlag = () => {
	let toHide = document.querySelector(".flag.selected");
	let toShow = document.querySelector(".flag:not(.selected)");
	toHide.classList.remove("selected");
	toShow.classList.add("selected");
}

const animateCSS = (selector, animation, prefix = 'animate__') => new Promise((resolve, _reject) => {
  const animationName = `${prefix}${animation}`;
  const node = document.querySelector(selector);

  node.classList.add(`${prefix}animated`, animationName);

  const handleAnimationEnd = (event) => {
    event.stopPropagation();
		node.classList.remove(`${prefix}animated`, animationName);
    resolve('Animation ended');
  }

	node.addEventListener("animationend", handleAnimationEnd, { once: true })
});

const toggleMobileNav = () => {
	let rightNav = document.querySelector(".right-nav");
	let crossSvg = document.querySelector(".burger-menu .cross-svg");
	let burgerSvg = document.querySelector(".burger-menu .burger-svg");

	if(rightNav.style.display == "flex"){
		animateCSS(".right-nav", "slideOutUp").then(() => {
			rightNav.style.display = null;
			crossSvg.style.display = null;
			burgerSvg.style.display = null;
		});
	}else{
		rightNav.style.display = "flex";
		crossSvg.style.display = "inline";
		burgerSvg.style.display = "none";
		animateCSS(".right-nav", "slideInDown");
	}
}

document.addEventListener("DOMContentLoaded", function(){
	document.querySelectorAll(".flag").forEach((flag) => {
		flag.addEventListener("click", toggleFlag);
	});

	animateCSS(".home-title", "slideInDown");
	animateCSS(".home-row .left", "slideInLeft");
	animateCSS(".home-row .right", "slideInRight");

	barba.init({
		timeout: 10000,
    transitions: [{
      name: 'default-transition',
      leave(data) {
        return gsap.to(data.current.container.querySelector(".barba-content"), {
          opacity: 0
        });
      },
      enter(data) {
        gsap.from(data.next.container.querySelector(".barba-content"), {
          opacity: 0
        });
      }
    }]
  });
});

const toggleFlag = () => {
	let toHide = document.querySelector(".flag.selected");
	let toShow = document.querySelector(".flag:not(.selected)");
	toHide.classList.remove("selected");
	toShow.classList.add("selected");
}

const animateCSS = async (selector, animation, prefix = 'animate__') => new Promise((resolve) => {
	const node = document.querySelector(selector);
	if (!node) {
		resolve("Nothing to animate");
	}

  const animationName = `${prefix}${animation}`;

  node.classList.add(`${prefix}animated`, animationName);

  const handleAnimationEnd = (event) => {
    event.stopPropagation();
		node.classList.remove(`${prefix}animated`, animationName);
    resolve("Animation ended");
  }

	node.addEventListener("animationend", handleAnimationEnd, { once: true })
});

const toggleMobileNav = () => {
	let rightNav = document.querySelector(".right-nav");
	let closeSvg = document.querySelector(".burger-menu .close-svg");
	let menuSvg = document.querySelector(".burger-menu .menu-svg");

	if(rightNav.style.display == "flex"){
		animateCSS(".right-nav", "slideOutUp").then(() => {
			rightNav.style.display = null;
			closeSvg.style.display = null;
			menuSvg.style.display = null;
		});
	}else{
		rightNav.style.display = "flex";
		closeSvg.style.display = "inline";
		menuSvg.style.display = "none";
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

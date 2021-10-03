document.addEventListener("DOMContentLoaded", function(){
	$(".flag").on("click", toggleFlag);

	animateCSS("nav", "slideInDown");

	if(document.querySelector(".main.home")){
		animateCSS(".img-a", "fadeIn");
		animateCSS(".left-title", "slideInLeft");
		animateCSS(".short-text", "slideInRight");
		animateCSS(".discover-button", "slideInRight");
	}

	barba.init({
    transitions: [{
      name: 'page-page',
      to: {
        custom: function(data){
          return true;
        }
      },
      leave(data) {
        return gsap.to(data.current.container.querySelector(".barba-content"), {
          transform: "translateY(-100%)"
        });
      },
      enter(data) {
        gsap.from(data.next.container.querySelector(".barba-content"), {
          transform: "translateY(100%)"
        });
      }
    }]
  });
});

const animateCSS = (element, animation, prefix = 'animate__') => new Promise((resolve, reject) => {
  const animationName = `${prefix}${animation}`;
  const node = $(element);

  node.addClass(`${prefix}animated ${animationName}`);

  function handleAnimationEnd(event) {
    event.stopPropagation();
    node.removeClass(`${prefix}animated ${animationName}`);
    resolve('Animation ended');
  }

  node.one('animationend', handleAnimationEnd);
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

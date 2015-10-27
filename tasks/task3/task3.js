




//use this snippet to animate the scroll
//@argument: targetElement - element classname selector to scroll to
function smoothScroll (targetElement) {
	//you can change the duration of the animation with this
	var duration = 750;
	//stop the current animation
	$("html, body").stop(true,false);
	//animate, use "swing" easing
	$("html, body").animate({
		scrollTop:$(targetElement).offset().top
	},duration,"swing");
	//see https://api.jquery.com/scrollTop/ for reference and more information on scrollTop
}
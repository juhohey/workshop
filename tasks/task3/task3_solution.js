//Task 3 solution

//take each link
$(".nav-link").each(function(event){
	// attach eventListener
	$(this).click(function(event){
		//prevent the default action
		event.preventDefault();
		//get the target name
		var scrollTarget = $(this).data("link");
		//format it so that it can be used as a selector
		scrollTarget = "."+scrollTarget;
		//finally call the animation function to display scrolling
		smoothScroll(scrollTarget);
	});
});


//use this snippet to animate the scroll
//@argument: targetElement - element  classname selector to scroll to
function smoothScroll (targetElement) {
	//you can change the duration of the animation with this
	var duration = 750;
	//stop the current animation
	$("html, body").stop(true,false);
	$("html, body").animate({
		scrollTop:$(targetElement).offset().top
	},duration,"swing");
	//see https://api.jquery.com/scrollTop/ for reference and more information on scrollTop
}
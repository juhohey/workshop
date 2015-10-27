//task1_solution.js

//.content-heading eventListener
$(".content-heading").click(function () {
	//short answer
	$(this).toggleClass("blue");
	//Note: can also be done with an if block
});

//.btn eventListener
$(".btn").click(function () {
	//now we actually need to check for the class
	if ($(this).hasClass("blue")) {
		$(this).removeClass("blue");
		handleData($(this));
	}
	else{
		$(this).addClass("blue");
	}

});
console.log(variable);
// Task 2 solution

//find each image
$("img").each(function () {
	//check that it has the lazy-data attribute
	if ($(this).data("lazy")) {
		//assing the data-source attribute to a variable to be more clear, not necessary though
		var source = $(this).data("source");
		//put the source to the src-attribute
		$(this).attr("src",source);

		//a oneliner would be
		//$(this).attr("src",$(this).data("source"));
	}
});
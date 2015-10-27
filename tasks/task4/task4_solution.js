// //task4.js

// //use this object to update the text values in the '<div class="shopping">' element
// var shoppingList = {
// 	"title":"Tiger tuesday",
// 	"date":"27.10.",
// 	"creator":"He-Man",
// 	"skeletorSucks":true,
// 	"values":[
// 		"butter","candy","tiger food"
// 	]
// };

// function updateShoppingList () {

// 	//loop trough the shopping list
// 	for(var key in shoppingList){
// 		//the value is a string?
// 		if (typeof shoppingList[key]==="string") {
// 			//Make a CSS selector from the key
// 			var selector ="."+key;
// 			//replace the text with the value of this property
// 			$(selector).text(shoppingList[key]);
// 		}
// 	}
// 	//a variable to hold the markup - initialize as empty string so it's not undefined
// 	var markup ="";
// 	//the values array
// 	for (var i = 0; i < shoppingList.values.length; i++) {
// 		//increment the markup variable with an <li> element
// 		markup += "<li>"+shoppingList.values[i]+"</li>";
// 	}
// 	//finally replace the old markup with our new one
// 	$(".list-items").html(markup);
// }

// //call the function
// updateShoppingList();
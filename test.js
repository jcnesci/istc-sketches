function alignWords() {
	
	// starting X position
	var x_align = 100;	
	
	// loop thru each word, shrink its size (ie. font-size) and position them end-to-end on X axis (with 5px spacing)
	$('.other-word').each(function(index, item){
		$(item).toggleClass("other-word-animate");
		
		console.log("t- x1 = "+ x_align)		// does not increment. Outputs: t- x1 = 100, t- x1 = 100, t- x1 = 100, etc...

		$(item).animate({
			'font-size': $('.main-word').css("font-size").substr(0, $('.main-word').css("font-size").length-2),
			top: $('.main-word').css("top"),
			left: x_align						// always remains 100, which is wrong
		}, function() {
			x_align += $(this).width() + 5;
			console.log("t- x = "+ x_align);	// increments correctly. Outputs: t- x = 154, t- x = 311, t- x = 316, etc...
		});

	});
}
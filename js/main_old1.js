// GLOBAL BARS ----------------------------------------


// MAIN ----------------------------------------
$(function() {

		// Wrap each word in a span, and save it's starting position in a standard paragraph.
		// setup();
		
		// Add special class to each word
		// addClass();


		// ------------------------------------------------------------------------------------
		
		function addClass() {
			$.each( $("span"), function(i, word) {
				if ($(word).hasClass("is_main_word")) {
					$(word).addClass("main-word");

					// Position main word in the center of div.
					var x = $('.tweet').width()/2 - $(word).width()/2;
					var y = $('.tweet').height()/2 - $(word).height()/2;
					$(word).css({top: y, left: x});

					// On click, align all words back into sentence form.
					$(word).click(function() { alignWords(); });

				} else {
					$(word).addClass("other-word");

					// Give word random scale, and opacity.
					var alpha = random_float(0.01, 0.3);
					var fontSize = Math.floor(Math.random() * 20) * $(word).css("font-size").slice(0, -2);
					$(word).css({opacity: alpha, 'font-size':fontSize});

					// Position word randomly.
					var padding = 50;
					var maxWidth = $('.tweet').width() - padding;
					var maxHeight = $('.tweet').height() - padding;
					var x = Math.floor(Math.random() * maxWidth) - $(word).width();
					var y = Math.floor(Math.random() * maxHeight)  - $(word).height();
					$(word).css({top: y, left: x});
				}
			});
		}

		function setup() {
			var words = $(".tweet").text().split(" ");
			$(".tweet").empty();
			$.each(words, function(i, word) {
				var formattedWord = "";
				// if cur word is the main word, wrap in special class
				if (word.charAt(0) === "*" && word.charAt(word.length-1) === "*") {
					
					// Store word's X,Y position in the sentence and wrap in span.
					word = word.substr(1, word.length-2)
					formattedWord = $("<span class='is_main_word'>").text(word);
					var mainWord = $(formattedWord).appendTo($(".tweet"));
					mainWord.data("starting_pos", {x:mainWord.position().left, y:mainWord.position().top});

					console.log("t--- main starting_pos.x = "+ mainWord.data("starting_pos").x);
					console.log("t--- main starting_pos.y = "+ mainWord.data("starting_pos").y);
				} 
				// else, wrap normal word in other class 
				else {
					// Store word's X,Y position in the sentence and wrap in span.
					formattedWord = $("<span>").text(word);
					var otherWord = $(formattedWord).appendTo($(".tweet"));
					otherWord.data("starting_pos", {x:otherWord.position().left, y:otherWord.position().top});

					console.log("t- other starting_pos.x = "+ otherWord.data("starting_pos").x);
					console.log("t- other starting_pos.y = "+ otherWord.data("starting_pos").y);
				}
			});
		}

		function alignWords() {
			var x_align = 0,
		    words = $('span'),
		    fontSize = $('.main-word').css("font-size").slice(0, -2),
		    top = $('.main-word').css("top"),
		    i = 0, n = words.length;
			(function doOne(){
			    if (i++>=n) return;
			    var curWord = words.eq(i-1);

	        	console.log("t----------- starting_pos.x = "+ curWord.data("starting_pos").x);
	    		console.log("t----------- starting_pos.y = "+ curWord.data("starting_pos").y);

			    curWord.toggleClass("other-word-animate")
			    .animate({
			        fontSize: fontSize,
			        opacity: 1,
			        top: curWord.data("starting_pos").y,
			        left: curWord.data("starting_pos").x
			    }, function(){
			        x_align += $(this).width() + 5;
			        doOne();
			    });
			})();
		}

		// function alignWords() {
		// 	var x_align = 100;	
		// 	$('.other-word').each(function(index, item){
		// 		$(item).toggleClass("other-word-animate");
		// 		console.log($('.main-word').css("font-size"))
		// 		console.log("t- x1 = "+ x_align)

		// 		$(item).animate({
		// 			'font-size': $('.main-word').css("font-size").substr(0, $('.main-word').css("font-size").length-2),
		// 			top: $('.main-word').css("top"),
		// 			left: x_align
		// 		}, function() {
		// 			x_align += $(this).width() + 5;
		// 			console.log("width = "+ $(this).width());
		// 			console.log("t- x = "+ x_align);	
		// 		});

		// 	});
		// }

	  // apply spans
      // $("h2").lettering();

    });
// GLOBAL VARS ----------------------------------------


// INIT ----------------------------------------
$(function() {

	setupOriginalTweet();

});

// FUNCTIONS ----------------------------------------
function setupOriginalTweet() {
	var words = $(".original_tweet").text().split(" ");
	$(".original_tweet").empty();
	
	$.each(words, function(i, word) {
		
		var formattedWord = $("<span>").text(word + " ");
		var domWord = $(formattedWord).appendTo($(".original_tweet"));
		
		if (domWord.text().indexOf("*") !== -1) {
			domWord.addClass("keyword");
			domWord.text( domWord.text().substr(1, word.length-2) + " " );			// remove asterisks from string
		}

	});

	buildDreamTweet();
}

function buildDreamTweet() {
	
	var dreamTweet = $("<div>").addClass("dream_tweet").appendTo("body");
	var words = $(".original_tweet > span");
	
	$.each(words, function(i, word) {

		var wordObj = new Word( word, $(word).position().left, $(word).position().top );// create a word object

		if ($(word).hasClass("keyword")) {
			wordObj.isInteractive = true;
		}

		// append word object to new dream tweet div
		// TODO : want to be able to do..... : ? word.setPosition(x,y)
		// TODO : array of word objects : word[3].setPosition(x,y)
		var domWord = $(wordObj.value).clone().appendTo(dreamTweet);
		domWord.position().left = wordObj.homePosition.x;
		domWord.position().top = wordObj.homePosition.y;

	});

}
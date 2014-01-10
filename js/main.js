// GLOBAL VARS ----------------------------------------


// INIT ----------------------------------------
$(function() {

	setupOriginalTweets();

});

// FUNCTIONS ----------------------------------------
function setupOriginalTweets() {
	var words = $(".tweet").text().split(" ");
	$(".tweet").empty();
	
	$.each(words, function(i, word) {
		
		var formattedWord = $("<span>").text(word + " ");
		var domWord = $(formattedWord).appendTo($(".tweet"));
		
		if (domWord.text().indexOf("*") !== -1) {
			domWord.addClass("keyword");
			domWord.text( domWord.text().substr(1, word.length-2) + " " );			// remove asterisks from string
		}

	});

	buildWords();
}

function buildWords() {
	
	var words = $(".tweet > span");
	
	$.each(words, function(i, word) {

		var wordObj = new Word();									// create a word object
		wordObj.value = $(word).text();
		wordObj.homePosition.x = $(word).position().left;			// store original word's position in new word object
		wordObj.homePosition.y = $(word).position().top;

		if ($(word).hasClass("keyword")) {
			wordObj.isInteractive = true;
		}
	});

}
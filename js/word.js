// GLOBAL VARS ----------------------------------------


// OBJECT PROTOTYPE ----------------------------------------
function Word(_value, _x, _y) {
	
	// the HTML content of the tweet.
	this.value = _value || 0;
	
	// the word's home position : this is where the word belongs in the tweet paragraph.
	this.homePosition = {
		"x": _x || 0,
		"y": _y || 0
	};
	// the word's current position : this is where it has moved to.
	this.currentPosition = {
		"x": _x || 0,
		"y": _y || 0
	};
	this.scale = 100;
	this.opacity = 1;
	this.blur = 0;
	this.isInteractive = false;

	console.log(this);
}

// OBJECT FUNCTIONS ----------------------------------------
Word.prototype = {
	onClick: function() {
	},
	moveToHomePosition: function() {
	},
	decay: function() {
	},
	disappear: function() {
	},
	getTextValue: function() {
		return $(this.value).text();
	}
}
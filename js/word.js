// GLOBAL VARS ----------------------------------------


// OBJECT PROTOTYPE ----------------------------------------
function Word() {
	this.value = "";
	this.homePosition = {
		"x": 0,
		"y": 0
	};
	this.currentPosition = {
		"x": 0,
		"y": 0
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
	}
}
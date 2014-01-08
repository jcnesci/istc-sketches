// generates random number that is greater or equal to low-bound, and smaller than high-bound.
function random_integer(low, high) {
	return Math.floor(Math.random() * (high-low)) + low;
}
// generates random number that is greater or equal to low-bound, and smaller than high-bound.
function random_float(low, high) {
	return Math.round( (Math.random() * (high-low) + low) * 100 ) / 100;
}
module.exports = function reverse (n) {
  	let result = 0;
  	
  	if ( n < 0) n *= -1;

  	while (n > 0) {
    	result = result * 10 + n % 10;
    	n = Math.floor(n / 10);
  	}
  	return result;
}
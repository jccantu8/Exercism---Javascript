export const convert = (num) => {
	let factors = [];

	if (num % 3 == 0) {
		factors.push('Pling');
	}
	if (num % 5 == 0) {
		factors.push('Plang');
	}
	if (num % 7 == 0) {
		factors.push('Plong');
	}
  
  	if (factors.length === 0) {
  		return num.toString();
  	} else {
  		return factors.join('');
  	}
};

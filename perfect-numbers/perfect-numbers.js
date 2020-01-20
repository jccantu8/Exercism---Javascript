export const classify = (num) => {
  if (num <= 0) {
  	throw new Error("Classification is only possible for natural numbers.")
  } else if (num === 1) {
  	return 'deficient'
  } else {
  	let factors = [];

  	for (let i = 1; i <= Math.floor(num / 2); i++) {
  		if (num % i === 0) {
  			factors.push(i)
  		}
  	}

  	let sum = factors.reduce( (accu, e) => accu + e)

  	if (sum < num) {
  		return 'deficient'
  	} else if (sum > num) {
  		return 'abundant'
  	} else {
  		return 'perfect'
  	}
  }
};

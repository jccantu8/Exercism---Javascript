export class Say {
  inEnglish(n) {
  	if (n < 0 || n >= 1000000000000) {
  		throw new Error('Number must be between 0 and 999,999,999,999.')
  	} else if (n === 0) {
  		return 'zero'
  	} else {

	  	let result = []

	  	while (n > 0){
		    if (n >= 1000000000) {
		    	let chunk = Math.floor(n / 1000000000)
		    	n = n % 1000000000
		    	result.push(this.convert(chunk) + ' ' +'billion')
		    } else if (n >= 1000000) {
		    	let chunk = Math.floor(n / 1000000)
		    	n = n % 1000000
		    	result.push(this.convert(chunk) + ' ' +'million')
		    } else if (n >= 1000) {
		    	let chunk = Math.floor(n / 1000)
		    	n = n % 1000
		    	result.push(this.convert(chunk) + ' ' +'thousand')
		    } else {
		    	result.push(this.convert(n))
		    	// Set n = 0 in order to terminate while loop
		    	n = n % n
		    }
		}

		return result.join(' ')
	}
  }

  convert(chunk){
  	let result = []

  	while (chunk > 0)
	  	if (chunk >= 100){
	  		let hundreds = Math.floor(chunk / 100)
	  		result.push(NUMBERS[hundreds] + ' ' + 'hundred')
	  		chunk = chunk % 100
	  	} else{
	        Object.keys(NUMBERS).reverse().forEach( (e) => {
	        	if (chunk / e === 1){
		        	result.push(NUMBERS[e])
		        	// Set chunk = 0 in order to terminate while loop
			    	chunk = chunk % chunk
		        } else if (chunk / e > 1){
		        	let tens = NUMBERS[e]
		        	chunk = chunk % e
		        	result.push(tens + '-' + NUMBERS[chunk])
		        	// Set chunk = 0 in order to terminate while loop
			    	chunk = chunk % chunk
		        }
	        })
	  	}

	  	return result.join(' ')
  }
}

const NUMBERS = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
					10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
					17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
					60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'}
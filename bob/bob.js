export const hey = (message) => {

	if (/[a-zA-Z]+/.test(message)) {

		if (/\?$/.test(message) || (/\?[\s]+$/.test(message))) {

		  	if (/^[^a-z]*$/.test(message)) {
		  		return 'Calm down, I know what I\'m doing!'
		  	}

	  		return'Sure.'

	  	}

	  	if (/^[^a-z]*$/.test(message)) {

	  		return 'Whoa, chill out!'

	  	}

	  	return 'Whatever.'

	}else {

		if (/\?$/.test(message)) {
			return'Sure.'
		}else if (/^[\s]*$/.test(message)) {
			return 'Fine. Be that way!'
		}

		return 'Whatever.'
	}

};
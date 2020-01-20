export const secretHandshake = (number) => {
	let handshake = [];
	let reverseFlag = false;

	if (typeof(number) !== 'number') {
		throw new Error('Handshake must be a number');
	}

	while (number > 0) {
		while (number >= 16) {
			number -= 16;
			reverseFlag = !reverseFlag
		}
		if (number >= 8) {
			handshake.push('jump');
			number -= 8;
		}
		if (number >= 4) {
			handshake.push('close your eyes');
			number -= 4;
		}
		if (number >= 2) {
			handshake.push('double blink');
			number -= 2;
		}
		if (number === 1) {
			handshake.push('wink');
			number -= 1;
		}
	}

 	 handshake = handshake.reverse();

	if (reverseFlag) {
		handshake = handshake.reverse();
	}

	return handshake;

};
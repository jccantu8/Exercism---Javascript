export const reverseString = (myStr) => {
	let forward = myStr.split("");
	let reverse = [];

	for (let i = forward.length-1; i >= 0; i--) {
		reverse.push(forward[i]);
	}

	return reverse.join("");
};

export const accumulate = (orig, accu) => {
	let newArr = []

	for(let i = 0; i < orig.length; i++){
		newArr.push(accu(orig[i]))
	}

	return newArr
};

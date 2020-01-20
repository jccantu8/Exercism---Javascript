export const transform = (old) => {
	let newObj = {};
	let oldKeys = Object.keys(old);

	for(let i = 0; i < oldKeys.length; i++) {
		for(let j = 0; j < old[oldKeys[i]].length; j++) {
			newObj[old[oldKeys[i]][j].toLowerCase()] = parseInt(oldKeys[i]);
		}
	}

	return newObj;
};

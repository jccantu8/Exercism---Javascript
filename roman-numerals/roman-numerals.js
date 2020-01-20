export const toRoman = (n) => {
	const ROMAN = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]

	let result = []

	ROMAN.forEach( (x) => {
		while(n % x[0] !== n && n !== 0){
			n -= x[0]
			result.push(x[1])
		}
	})

	return result.join('')
};

export const primes = (n) => {
	let list = new Set()

	for(let i = 2; i <= n; i++){
	  list.add(i)
	}

	let multiples = new Set()
	let j = 2

	list.forEach( (e) => {
		j = 2
		while(e*j <= n){
			multiples.add(e*j)
			j++
		}
	})

	multiples.forEach( (e) => {
		list.delete(e)
	})

	return Array.from(list)
};

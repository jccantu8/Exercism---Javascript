export class Prime {
  nth(n) {
    if (n <= 0){
    	throw new Error('Prime is not possible')
    } else {
	  let primes = []
	  let i = 2

	  while (primes.length < n){
	    if (primes.every( (x) => i % x !== 0)){
	      primes.push(i)
	      i++
	    } else{
	      i++
	    }
	  }

	  return primes.pop()
    }
  }
}

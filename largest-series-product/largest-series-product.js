export const largestProduct = (num, n) => {
  if (num.search(/[^0-9]/g) !== -1 || n < 0){
  	throw new Error('Invalid input.')
  } else if (n === 0) {
  	return 1
  } else if (n > 0 && num.length === 0) {
  	throw new Error('Slice size is too big.')
  } else if (n > num.length) {
  	throw new Error('Slice size is too big.')
  } else {
  	let numOfProds = (num.length - n) + 1
  	let myDigit = num.split('').map(Number)
    let subProds = []

    for(let i = 0; i <= numOfProds - 1; i++){
    	subProds.push(myDigit.slice(i, i + n))
    }

    subProds = subProds.map( (e) => e.reduce( (a,b) => a * b))

    return Math.max(...subProds)
  }
};
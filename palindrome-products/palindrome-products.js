//cant handle 4 digit products

export class Palindromes {
  static generate(factorObject) {
  	if(factorObject['minFactor'] > factorObject['maxFactor']) {
  		throw new Error('min must be <= max')
  	}
    let products = []
    let minFact = factorObject['minFactor']
    let maxFact = factorObject['maxFactor']

    for(let i = minFact; i <= maxFact; i++) {
      for(let j = i; j <= maxFact; j++) {
        products.push([(i * j).toString(), [i, j]])
      }
    }
    
    let palindromicProducts = products.filter( (e) => {
      if(e[0].length === 1){
        return true
      } else {
        let flag = false

        for(let k = 0; k <= Math.floor(e[0].length / 2) - 1; k++){
          if(e[0][k] !== e[0][(e[0].length - 1) - k]) {
            return false
          } else {
            flag = true
          }
        }

        if(flag) {return true}
      }
    })

    if(palindromicProducts.length === 0){
    	return {
	      smallest: {value: null, factors: []},
	      largest: {value: null, factors: []}
    	}
    }

    palindromicProducts = palindromicProducts.map( (e) => [parseInt(e[0]), e[1]])

    let justPalinProd = palindromicProducts.map((e) => e[0])
    let maxProd = Math.max(...justPalinProd)
    let minProd = Math.min(...justPalinProd)

    let maxProdFacts = []
    let minProdFacts = []

    palindromicProducts.forEach( (e) => {
      if(e[0] === maxProd){
        maxProdFacts.push(e[1])
      }
    })

    palindromicProducts.forEach( (e) => {
      if(e[0] === minProd){
        minProdFacts.push(e[1])
      }
    })

    let smallest = {value: minProd, factors: minProdFacts}
    let largest = {value: maxProd, factors: maxProdFacts}

    return {
      smallest: smallest,
      largest: largest
    }
  }

}
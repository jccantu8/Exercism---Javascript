export const convert = (numArr, startBase, endBase) => {
  if(startBase === undefined || !Number.isInteger(startBase) || startBase <= 1){
    throw new Error('Wrong input base')
  } else if(endBase === undefined || !Number.isInteger(endBase) || endBase <= 1){
    throw new Error('Wrong output base')
  } else if(numArr[0] === 0 && numArr.length === 1 && startBase !== undefined && endBase !== undefined){
    return [0]
  } else if(numArr.length === 0 || numArr[0] === 0 || !numArr.every( (e) => e >= 0) || !numArr.every( (e) => e < startBase)){
    throw new Error('Input has wrong format')
  }

	let convArr
  if(startBase === 10 && endBase === 10){
  	return numArr
  }else{
    convArr = []
    numArr.forEach( (e, index) => {
      convArr.push(e * Math.pow(startBase, numArr.length - index - 1))
    })
  }

  if(endBase === 10){
  	return (''+convArr.reduce( (a,b) => a+b)).split('').map(Number)
  }else{
  	let n = (convArr.reduce( (a,b) => a+b))
  	convArr = []
  	let counter

  	let exp = Math.floor(Math.log(n)/Math.log(endBase))
  	for(exp; exp >= 0; exp--){
	  counter = 0

	  while(n >= Math.pow(endBase, exp)){
	  	n -= Math.pow(endBase, exp)
	  	counter++
	  }

	  convArr.push(counter)
	 }

	 return convArr
  }
};
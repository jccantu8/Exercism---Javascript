export const validate = (input) => {
  let result = 0;

  let myArr = String(input).split('')

  myArr.forEach( (e) => {
  	result += Math.pow(parseInt(e), myArr.length)
  })

  if (result === input) {
  	return true
  } else {
  	return false
  }
};

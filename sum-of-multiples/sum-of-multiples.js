export const sumOfMultiples = (multiples, num) => {
  let result = []
  let i = 1

  multiples.forEach( (e) => {
  	i = 1;
  	while(e * i < num){
  		result.push(e * i)
  		i++
  	}
  })

  result = Array.from(new Set(result))

  return result.reduce( (a,b) => a + b, 0)
};

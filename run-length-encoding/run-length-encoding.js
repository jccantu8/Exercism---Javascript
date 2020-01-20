//error running npm test

export const encode = (str) => {
  let myArr = str.split('')
  let newArr = []
  let counter = 1

  for(let i = 1; i < str.length; i++){
  	if(myArr[i] === myArr[i-1]){
  		counter++
  	}else{
  		if(counter > 1){
  			newArr.push(counter)
  			newArr.push(newArr[i-1])
  		}else{
  			newArr.push(newArr[i-1])
  		}

  		counter = 1
  	}
  }

  if(counter > 1){
  	newArr.push(counter)
  	newArr.push(newArr[str.length-1])
  }else{
  	newArr.push(newArr[str.length-1])
  }

  return newArr.join('')
};

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};

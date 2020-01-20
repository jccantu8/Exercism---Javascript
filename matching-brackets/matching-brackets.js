export const matchingBrackets = (myStr) => {
  let flag = true
  while (flag){
  	if (myStr.search(/\(\)|\[\]|\{\}/g) !== -1){
  		myStr = myStr.replace(/\(\)|\[\]|\{\}/, '')
  	}else{
  		flag = false
  	}
  }

  return myStr.length === 0? true: false
};

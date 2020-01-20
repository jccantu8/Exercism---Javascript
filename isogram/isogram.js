export const isIsogram = (myStr) => {
  myStr = myStr.replace(/[\-\s]/g, '').toLowerCase()

  let myArr = myStr.split('')

  for(let i = 0; i < myStr.length; i++){
  	if(myArr.slice(i+1).includes(myArr[i])){
  		return false
  	} else{
  		continue
  	}
  }
  return true
};

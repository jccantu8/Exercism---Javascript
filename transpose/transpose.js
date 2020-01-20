export const transpose = (origArr) => {
  let maxLength = 0

  origArr.forEach( (e) => {
    if(e.length > maxLength){
      maxLength = e.length
    }
  })

  origArr = origArr.map( (e) => {
    return e.padEnd(maxLength, ' ')
  })

  let tmpStr
  let newArr = []

  for(let i = 0; i < maxLength; i++){
    tmpStr = ''
    for(let j = 0; j < origArr.length; j++){
      tmpStr += origArr[j][i]
    }
    newArr.push(tmpStr)
  }

  return newArr
};
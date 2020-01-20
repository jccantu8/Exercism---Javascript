export const convert = (myStr) => {
  let myArr = myStr.split('\n')

  if (myArr.length > 4){
    if (myArr.length % 4 !== 0){
      throw new Error('Cannot convert string')
    } else{
      let result = ''

      for(let i = 0; i < myArr.length/4; i++){
        result += getConvert(myArr.slice(4*i, 4*i + 5))
        result += ','
      }

      return result.slice(0, result.length - 1)
    }
  } else {
    return getConvert(myArr)
  }
}

function getConvert (myArr){
  
  const NUMS = { '0': [' _ ', '| |', '|_|', '   '],
  '1': ['   ', '  |', '  |', '   '],
  '2': [' _ ', ' _|', '|_ ', '   '],
  '3': [' _ ', ' _|', ' _|', '   '],
  '4': ['   ', '|_|', '  |', '   '],
  '5': [' _ ', '|_ ', ' _|', '   '],
  '6': [' _ ', '|_ ', '|_|', '   '],
  '7': [' _ ', '  |', '  |', '   '],
  '8': [' _ ', '|_|', '|_|', '   '],
  '9': [' _ ', '|_|', ' _|', '   '],}

  let strArrs = []
  for(let i = 0; i<4; i++){
    strArrs[i] = myArr[i].match(/.{1,3}/g)
  }

  let myLength = strArrs[0].length
  let result = ''
  for(let i = 0; i < myLength; i++){
    let tmp = []
    let flag = false

    strArrs.forEach( (e) => {
      tmp.push(e[i])
    })

    for(let j = 0; j <= 9; j++){
      if (arraysMatch(tmp, NUMS[j])){
        result += j
        flag = true
        break
      }
    }

    if (!flag) result += '?'
  }

  return result
};

function arraysMatch(arr1, arr2){
  if (arr1.length !== arr2.length) return false

  for(let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false
    }
  }

  return true
}
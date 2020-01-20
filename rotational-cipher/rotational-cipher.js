export class RotationalCipher {
  static rotate(str, shift) {
    let myArr = str.split('')
    let newArr = []

    for (let i = 0; i < str.length; i++){
    	if (myArr[i].search(/[A-Z]/) !== -1){
    		newArr.push(String.fromCharCode((((myArr[i].charCodeAt(0) - 65) + shift) % 26) + 65))
    	} else if (myArr[i].search(/[a-z]/) !== -1){
    		newArr.push(String.fromCharCode((((myArr[i].charCodeAt(0) - 97) + shift) % 26) + 97))
    	} else {
    		newArr.push(myArr[i])
    	}
    }

    return newArr.join('')
  }
}

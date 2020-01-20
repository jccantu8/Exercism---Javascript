export class Diamond {
  makeDiamond(letter) {
    let dist = letter.charCodeAt(0) - 65

    let result = []
    let tmpStr

    for (let i = 0; i <= dist; i++){
    	tmpStr = ''

    	if (i === 0){
    		tmpStr = ' '.repeat(dist - i) + String.fromCharCode(65 + i) + ' '.repeat(dist - i)
    		result.push(tmpStr)
    	} else {
    		tmpStr = ' '.repeat(dist - i) + String.fromCharCode(65 + i) + ' '.repeat(2*i - 1) + String.fromCharCode(65 + i) + ' '.repeat(dist - i)
        result.push(tmpStr)
    	}
    }

    for (let j = (dist - 1); j >= 0; j--){
    	tmpStr = ''

    	if (j === 0){
    		tmpStr = ' '.repeat(dist - j) + String.fromCharCode(65 + j) + ' '.repeat(dist - j)
    		result.push(tmpStr)
    	} else {
    		tmpStr = ' '.repeat(dist - j) + String.fromCharCode(65 + j) + ' '.repeat(2*j - 1) + String.fromCharCode(65 + j) + ' '.repeat(dist - j)
        result.push(tmpStr)
    	}
    }

    return `${result.join('\n')}\n`
  }
}

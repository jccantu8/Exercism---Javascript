export class Luhn {
  constructor(n) {
  	n = n.replace(/\s+/g, '');
  	if (!this.checkStr(n)) {
  		this.luhnResult = false;
  	} else {
	    this.originalNum = n;
	    this.newNum = this.luhnCalculator(n);
	    this.luhnResult = (this.newNum % 10 === 0)? true: false;
	}
  }

  get valid() {
    return this.luhnResult;
  }

  luhnCalculator(num) {
  	let numArr = num.split('');

  	for (let i = numArr.length - 2; i >= 0; i -= 2) {
  		if ((parseInt(numArr[i]) * 2) > 9) {
  			numArr[i] = parseInt(numArr[i] * 2) - 9;
  		} else {
  			numArr[i] = parseInt(numArr[i] * 2);
  		}
  	}

  	return numArr.reduce((a, b) =>parseInt(a) + parseInt(b), 0);
  }

  checkStr(str) {
  	if (str.match(/[^\d]+/g) || str.length <= 1) {
  		return false;
  	} else {
  		return true;
  	}
  }
}
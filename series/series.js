export class Series {
  constructor(myStr) {
    this.myStr = myStr
    this.digit = this.myStr.split('').map(Number)
  }

  get digits() {
    return this.digit
  }

  slices(n) {
  	if(n > this.myStr.length){
  		throw new Error('Slice size is too big.')
  	}
  	
    let numOfStrs = (this.myStr.length - n) + 1
    let subStrs = []

    for(let i = 0; i <= numOfStrs - 1; i++){
    	subStrs.push(this.digit.slice(i, i + n))
    }

    return subStrs
  }
}

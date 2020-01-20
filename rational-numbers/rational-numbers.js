export class Rational {
  constructor(num, den) {
    this.numerator = num
    this.denominator = den
  }

  add(addend) {
    let numSum = ((this.numerator * addend.denominator) + (addend.numerator * this.denominator))
    let denSum = addend.denominator * this.denominator

    return this.reduce(numSum, denSum)
  }

  sub(subend) {
    let numSum = ((this.numerator * subend.denominator) - (subend.numerator * this.denominator))
    let denSum = subend.denominator * this.denominator

    return this.reduce(numSum, denSum)
  }

  mul(multend) {
    let numSum = (this.numerator * multend.numerator)
    let denSum = (this.denominator * multend.denominator)

    return this.reduce(numSum, denSum)
  }

  div(divend) {
    let numSum = (this.numerator * divend.denominator)
    let denSum = (this.denominator * divend.numerator)

    return this.reduce(numSum, denSum)
  }

  abs() {
    return this.reduce(Math.abs(this.numerator), Math.abs(this.denominator))
  }

  exprational(n) {
    if(n > 0){
      return this.reduce(this.numerator ** n, this.denominator ** n)
    } else if(n === 0){
      return new Rational(1,1)
    } else {
      return this.reduce(this.denominator ** Math.abs(n), this.numerator ** Math.abs(n))
    }
  }

  expreal(n) {
    if (this.numerator === 0){
      return 1.0
    } else {
      let result = (n ** this.numerator) ** (1 / this.denominator)

      if (result % Math.floor(result) > .9){
        return Math.round(result)
      } else {
        return result
      }
    }
  }

  reduce(numSum = this.numerator, denSum = this.denominator) {
    if (numSum === 0 && denSum !== 0){
      return new Rational(0, 1)
    } else{
        let x = Math.abs(numSum)
        let y = Math.abs(denSum)

        while(y) {
          let t = y
          y = x % y
          x = t
        }

        let gcd = x

        if(numSum < 0 && denSum < 0){
          numSum = numSum * -1
          denSum = denSum * -1
        } else if (numSum > 0 && denSum < 0){
          numSum = numSum * -1
          denSum = denSum * -1
        }

        return new Rational(numSum/x, denSum/x)
    }
  }
}

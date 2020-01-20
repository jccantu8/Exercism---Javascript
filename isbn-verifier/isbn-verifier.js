export class ISBN {
  constructor(isbn) {
    this.isbn = isbn.replace(/\-/g, '')
  }

  isValid() {
    if (this.isbn.length > 10 || this.isbn.length < 9 ){
      return false
    }

    let check
    let isbnArr

    if (this.isbn.length === 10){
      if (isNaN(this.isbn[9])){
        if (!this.isbn.endsWith('X')){
          return false
        }
      }
        isbnArr = this.isbn.split('').map(Number).slice(0, this.isbn.length - 1)

        if (this.isbn.endsWith('X')){
          check = 10
        }else{
          check = parseInt(this.isbn[9])
        }
    } else {
      isbnArr = this.isbn.split('').map(Number)
      check = 0
    }

    let sum = 0

    for (let i = 10; i > 1 ; i--){
      sum += (isbnArr[10 - i] * i)
    }

    sum += check

    if (sum % 11 !== 0){
      return false
    } else {
      return true
    }
  }
}
export class Cipher {
  constructor(key = null) {
    if(key === null) {
      this.createKey()
    } else {
      this.myKey = key
    }
  }

  encode(plaintext) {
    let plainArr = plaintext.split('')
    let keyArr = this.myKey.split('')
    let m,n
    let cipherArr = []

    for(let i = 0; i < plaintext.length; i++){
      m = (plainArr[i].charCodeAt() - 97)
      n = (keyArr[i % this.myKey.length].charCodeAt() - 97)

      cipherArr.push(String.fromCharCode(((m + n) % 26) + 97))
    }

    return cipherArr.join('')
  }

  decode(ciphertext) {
    let cipherArr = ciphertext.split('')
    let keyArr = this.myKey.split('')
    let m,n, sum
    let plainArr = []

    for(let i = 0; i < ciphertext.length; i++){
      m = (cipherArr[i].charCodeAt() - 97)
      n = (keyArr[i % this.myKey.length].charCodeAt() - 97)

      sum = m - n
      while(sum < 0) {
        sum += 26
      }
      plainArr.push(String.fromCharCode(((sum) % 26) + 97))
    }

    return plainArr.join('')
  }

  createKey(){
    let keyArr = []

    for(let i = 1; i <= 100; i++){
      keyArr.push(String.fromCharCode(Math.floor((Math.random() * 25) + 0) + 97))
    }

    this.myKey = keyArr.join('')
  }

  get key() {
    return this.myKey
  }
}
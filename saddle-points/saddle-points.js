export class Matrix {
  constructor(myStr) {
    this.origArr = myStr.split('\n').map((e) => {
      return e.split(' ')
    })
    this.origArr = this.origArr.map( (e) => {
      return e.map( (i) => parseInt(i))
    })
    this.tranArr = transpose(this.origArr)
    this.saddlePts = saddle(this.origArr, this.tranArr)
  }

  

  get rows() {
    return this.origArr
  }

  get columns() {
    return this.tranArr
  }

  get saddlePoints() {
    return this.saddlePts
  }
}

const transpose = (origArr) => {
  let newArr = origArr[0].map((col, i) => origArr.map(row => row[i]));

  return newArr
};

function saddle(origArr, tranArr){
    let saddlePts = []
    for(let i = 0; i < tranArr[0].length; i++){
      for(let j = 0; j < origArr[0].length; j++){
        let num = origArr[i][j]
        let test1 = false
        let test2 = false

        if (origArr[i].every( (e) => e <= num)){
          test1 = true

          if (tranArr[j].every( (f) => f >= num)){
            test2 = true
          } else {
            test2 = false
          }
        } else {
          test1 = false
        }

        if (test1 && test2) {
          saddlePts.push([i,j])
        }
      }
    }

    return saddlePts
}
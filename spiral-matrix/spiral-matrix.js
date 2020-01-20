export class SpiralMatrix {
  static ofSize(n) {
    let myArr = []

    for(let a = 0; a < n; a++){
    	myArr.push([])
    }

    let [i,j,b,incr,iEnd,jEnd] = [0,0,1,1,n-1,n-1]

    while(b <= (2*n - 1)){
      for(let v = j; v <= jEnd; v++){
        myArr[i][v] = (incr)
        incr++
      }
      i++
      b++

      for(let x = i; x <= iEnd; x++){
        myArr[x][jEnd] = (incr)
        incr++
      }
      jEnd--
      b++

      for(let y = jEnd; y >= j; y--){
        myArr[iEnd][y] = (incr)
        incr++
      }
      iEnd--
      b++

      for(let z = iEnd; z >= i; z--){
        myArr[z][j] = (incr)
        incr++
      }
      j++
      b++
    }

    return myArr
  }
}
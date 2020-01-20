export const annotate = (input) =>  {
  if(input.length === 0){
    return []
  } else if(input === ['']){
    return ['']
  }

  input = input.map( e => e.split(''))
  let numOfRows = input.length
  let numOfCols = input[0].length

  let output = []
  let newRow = []
  let counter = 0

  input.forEach( (n, y) => {
    newRow = []
    n.forEach( (m, x) => {
      counter = 0

      if(input[y][x] == '*'){
          newRow.push('*')
      } else {
        if(x-1 >= 0){
          if(input[y][x-1] == '*'){counter ++}
        }
        if(x+1 < numOfCols){
          if(input[y][x+1] == '*'){counter ++}
        }
        if(y-1 >= 0){
          if(input[y-1][x] == '*'){counter ++}
        }
        if(y+1 < numOfRows){
          if(input[y+1][x] == '*'){counter ++}
        }
        if(x-1 >= 0 && y+1 < numOfRows){
          if(input[y+1][x-1] == '*'){counter ++}
        }
        if(x-1 >= 0 && y-1 >= 0){
          if(input[y-1][x-1] == '*'){counter ++}
        }
        if(x+1 < numOfCols && y-1 >= 0){
          if(input[y-1][x+1] == '*'){counter ++}
        }
        if(x+1 < numOfCols && y+1 < numOfRows){
          if(input[y+1][x+1] == '*'){counter ++}
        }

        if(counter > 0){
        newRow.push(counter)
        } else {
          newRow.push(' ')
        }
      }
    })
    output.push(newRow.join(''))
  })

  return output
}
export const flatten = (myList) => {
  if (myList === undefined || myList.length === 0){
    return []
  } else {
    let newArr = []

    if (myList.includes(null) || myList.includes(undefined)) {
      myList = myList.filter( (e) => (e !== null && e !== undefined))
    }

      myList.forEach( (i)  => {
      if (Array.isArray(i)) {
        newArr = newArr.concat(flatten(i))
      } else {
        newArr.push(i)
      }
    })

    return newArr
  }
}
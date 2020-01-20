export class List {
  constructor(list) {
    if (list === undefined) {
      this.values = [];
    } else {
    this.values = list;
    }
  }

  append(list) {
    for (let i=0; i<list.values.length; i++) {
      this.values.push(list.values[i]);
    }

    return this
  }

  concat(listOfLists) {
    for (let i=0; i<listOfLists.values.length; i++){
      for (let j=0; j<listOfLists.values[i].values.length; j++) {
        this.values.push(listOfLists.values[i].values[j]);
      }
    }

    return this
  }

  filter(func) {
    let filteredVals = []
    for (let i=0; i<this.values.length; i++) {
      if (func(this.values[i])) {
        filteredVals.push(this.values[i])
      }
    }
    this.values = filteredVals
    return this
  }

  map(func) {
    let mappedVals = []
    for (let i=0; i<this.values.length; i++) {
      mappedVals.push(func(this.values[i]))
      }

    this.values = mappedVals
    return this
  }

  length() {
    let counter = 0;
    for (let i=0; i<this.values.length; i++) {
      counter++
    }

    return counter
  }

  foldl(func, accu) {
    for (let i=0; i<this.values.length; i++) {
      accu = func(accu, this.values[i])
    }

    return accu
  }

  foldr(func, accu) {
    for (let i=this.values.length-1; i>=0; i--) {
      accu = func(accu, this.values[i])
    }

    return accu
  }

  reverse() {
    let reversedArr = []
    for (let i=this.values.length-1; i>=0; i--) {
      reversedArr.push(this.values[i])
    }

    this.values = reversedArr
    return this
  }
}

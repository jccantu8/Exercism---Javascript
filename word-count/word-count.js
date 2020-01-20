export class Words {
  count(myStr) {
    let wordList = myStr.toLowerCase().trim().split(/[\s]+/g);
    let mySet = new Set(wordList);
    let myObj = {};
    let counter = 0;

    mySet.forEach( (e) => {
      counter = 0;
      wordList.forEach( (n) => {
        if (n === e) {
          counter++
        }
      })
      myObj[e] = counter;
    })

    return myObj;
  }
}
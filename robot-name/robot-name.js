export class Robot { 

  constructor() {
    if (typeof this._name !== 'undefined') {
      return;
    } else {
    this.reset();
    }
  }

  //used _ because this.name would call get name()
  get name() {
    return this._name
  }

  generateName() {
    let nameArr = []
    let letter1 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    let letter2 = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    let num1 = Math.floor(Math.random() * 10).toString();
    let num2 = Math.floor(Math.random() * 10).toString();
    let num3 = Math.floor(Math.random() * 10).toString();
    nameArr.push(letter1, letter2, num1, num2, num3);
    let name = nameArr.join('');
    return name;
  }

  reset() {
    let newName = this.generateName()
    while (robotNames.has(newName)) {
      newName = this.generateName();
    }

    robotNames.add(newName);
    this._name = newName;
  }
}

let robotNames = new Set();

Robot.releaseNames = () => { robotNames.clear()};
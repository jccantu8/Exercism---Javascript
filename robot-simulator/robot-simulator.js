export class InvalidInputError extends Error {
  constructor() {
    this.direction
    this.location
  }
}

export class Robot {
  orient(dir) {
    this.direction = dir
  }

  get bearing() {
    return this.direction
  }

  get coordinates() {
    throw new Error("Remove this statement and implement this function");
  }

  turnRight() {
    throw new Error("Remove this statement and implement this function");
  }

  turnLeft() {
    throw new Error("Remove this statement and implement this function");
  }

  at() {
    throw new Error("Remove this statement and implement this function");
  }

  advance() {
    throw new Error("Remove this statement and implement this function");
  }

  instructions() {
    throw new Error("Remove this statement and implement this function");
  }

  place() {
    throw new Error("Remove this statement and implement this function");
  }

  evaluate() {
    throw new Error("Remove this statement and implement this function");
  }
}

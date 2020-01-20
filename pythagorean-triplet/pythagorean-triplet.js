export class Triplet {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  sum() {
    return this.a + this.b + this.c
  }

  product() {
    return this.a * this.b * this.c
  }

  isPythagorean() {
    if(this.a*this.a + this.b*this.b === this.c*this.c){
      return true
    } else {
      return false
    }
  }

  //taken from ubalot
  static where({ sum, minFactor = 1, maxFactor }) {
    let triplets = [];
    for (let a = minFactor; a < maxFactor - 2; a++) {
      for (let b = a + 1; b <= maxFactor - 1; b++) {
        for (let c = b + 1; c <= maxFactor; c++) {
          let triplet = new Triplet(a, b, c);
          if (triplet.isPythagorean() && (!sum || triplet.sum() == sum)) {
            triplets.push(triplet);
          }
        }
      }
    }
    return triplets;
  }
}

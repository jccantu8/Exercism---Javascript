export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.sidesArr = [this.side1, this.side2, this.side3];
  }

  kind() {
    this.sidesArr.forEach( (e) => {
    	if (e <= 0) {
    		throw new error("No negatives side lengths");
    	}
    });

    if ((this.side1 + this.side2 <= this.side3) || (this.side1 + this.side3 <= this.side2) || (this.side2 + this.side3 <= this.side1)) {
    	throw new error("Violates triangle inequality");
    };

    if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
    	return "equilateral";
    } else if ((this.side1 === this.side2) || (this.side2 === this.side3) || (this.side1 === this.side3)) {
    	return  "isosceles"
    } else {
    	return "scalene";
    }
  }
}

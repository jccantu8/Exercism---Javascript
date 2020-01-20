export class ComplexNumber {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  real() {
    return this.real;
  }

  imag() {
    return this.imag;
  }

  add(num2) {
    let realPart = this.real + num2.real;
    let imagPart = this.imag + num2.imag;

    return new ComplexNumber(realPart, imagPart);
  }

  sub(num2) {
    let realPart = this.real - num2.real;
    let imagPart = this.imag - num2.imag;

    return new ComplexNumber(realPart, imagPart);
  }

  div(num2) {
    let realPart = ((this.real * num2.real) + (this.imag * num2.imag)) / (Math.pow(num2.real, 2) + Math.pow(num2.imag, 2));
    let imagPart = ((this.imag * num2.real) - (this.real * num2.imag)) / (Math.pow(num2.real, 2) + Math.pow(num2.imag, 2));

    return new ComplexNumber(realPart, imagPart);
  }

  mul(num2) {
    let realPart = (this.real * num2.real) - (this.imag * num2.imag);
    let imagPart = (this.real * num2.imag) + (this.imag * num2.real);

    return new ComplexNumber(realPart, imagPart);
  }

  abs() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
  }

  conj() {
    if (this.imag === 0) {
      return new ComplexNumber(this.real, this.imag);
    } else {
      return new ComplexNumber(this.real, this.imag * -1);
    }
  }

  exp() {
    let realPart = Math.pow(Math.E, this.real) * Math.cos(this.imag);
    let imagPart = Math.pow(Math.E, this.real) * Math.sin(this.imag);

    return new ComplexNumber(realPart, imagPart);
  }
}

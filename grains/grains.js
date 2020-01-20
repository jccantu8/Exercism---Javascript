import BigInt from './lib/big-integer';

export class Grains {
  square(num) {
    return BigInt(2).pow(num-1).toString();
  }

  total() {
  	let sum = 0;

    for(let i = 1; i <= 64; i++){
    	sum = BigInt(sum).add(BigInt(this.square(i)));
    }

    return sum.toString();
  }
}

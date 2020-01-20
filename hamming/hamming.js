export const compute = (dna1, dna2) => {
  if (dna1.length !== dna2.length) {
  	if (dna1.length === 0) {
  		throw new Error("left strand must not be empty");
  	} else if (dna2.length === 0) {
  		throw new Error("right strand must not be empty");
  	}
  	throw new Error("left and right strands must be of equal length");
  }

  let counter = 0;
  let dna1Arr = dna1.split('');
  let dna2Arr = dna2.split('');

  for(let i = 0; i < dna1.length; i++) {
  	if (dna1Arr[i] !== dna2Arr[i]) {
  		counter++;
  	}
  }

  return counter;
};

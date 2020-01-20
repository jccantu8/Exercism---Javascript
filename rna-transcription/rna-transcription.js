export const toRna = (dnaString) => {
  let dnaArray = dnaString.split("");
  let rnaArray = [];
  let rnaString;

  dnaArray.forEach( function(letter) {
  	switch (letter) {
  		case "G":
  			rnaArray.push("C");
  			break;
  		case "C":
  			rnaArray.push("G");
  			break;
  		case "T":
  			rnaArray.push("A");
  			break;
  		case "A":
  			rnaArray.push("U");
  			break;
  		default:	
  			rnaArray.push(`${letter}`)
  	}
  });

  rnaString = rnaArray.join("");
  return rnaString;
};

export class NucleotideCounts {
  static parse(dnaString) {
  	if (dnaString.search(/[^ACTG]/gi) !== -1) {
  		throw new Error('Invalid nucleotide in strand');
  	}

  	let dnaArr = dnaString.split('');

  	let Acounter = 0;
  	let Ccounter = 0;
  	let Tcounter = 0;
  	let Gcounter = 0;

  	for (let i = 0; i < dnaString.length; i++) {
  		if (dnaArr[i].toUpperCase() === 'A') {
  			Acounter++;
  		} else if (dnaArr[i].toUpperCase() === 'C') {
  			Ccounter++;
  		} else if (dnaArr[i].toUpperCase() === 'T') {
  			Tcounter++;
  		} else if (dnaArr[i].toUpperCase() === 'G') {
  			Gcounter++;
  		}
  	}

    return [Acounter, Ccounter, Gcounter, Tcounter].join(' ');
  }
}

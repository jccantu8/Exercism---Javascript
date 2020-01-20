export const translate = (sequence) => {
  if (sequence === undefined){return []}

  const CODONS = {'AUG': 'Methionine', 'UUC': 'Phenylalanine', 'UUU': 'Phenylalanine', 'UUA': 'Leucine', 'UUG': 'Leucine', 'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine', 'UAU': 'Tyrosine', 'UAC': 'Tyrosine', 'UGU': 'Cysteine', 'UGC': 'Cysteine', 'UGG': 'Tryptophan'}
  const StopCODONS = ['UAA', 'UAG', 'UGA']

  let proteins = []
  let n = sequence.length

  for(let i = 0; i*3 < n; i++){
  	if(CODONS.hasOwnProperty(sequence.slice(i*3, i*3 + 3))){
  		proteins.push(CODONS[sequence.slice(i*3, i*3 + 3)])
  	} else if(StopCODONS.includes(sequence.slice(i*3, i*3 + 3))){
  		return proteins
  	} else{
  		throw new Error('Invalid codon')
  	}
  }

  return proteins
};

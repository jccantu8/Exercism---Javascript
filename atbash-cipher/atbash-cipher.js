export const encode = (plaintext) => {
  plaintext = plaintext.replace(/[\.\!\?\\\\-\s\,]/g, '')

  let ciphertext = plaintext.split('').map( (e) => {
  	if (isNaN(e)){
  		return REVERSEDALPHABET[ALPHABET.indexOf(e.toLowerCase())]
  	} else {
  		return e
  	}
  })
  ciphertext = ciphertext.join('').match(/.{1,5}/g)
  return ciphertext.join(' ')
};

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
					'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
					'x', 'y', 'z']

const REVERSEDALPHABET = ALPHABET.slice().reverse()

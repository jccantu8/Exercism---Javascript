export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase();

  let sentenceLetters = sentence.split('');

  let remainingLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  ALPHABET.forEach((e) => {
  	if (sentenceLetters.includes(e)) {

  		remainingLetters.splice(remainingLetters.indexOf(e), 1)
  	}
  });

  if (remainingLetters.length === 0) {
  	return true
  }
  else{
  	return false
  }

};

const ALPHABET = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
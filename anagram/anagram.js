export class Anagram {
  constructor(str) {
    this.originalStr = str.toLowerCase();
    this.myStr = str.toLowerCase().split('').sort().join('');
  }

  matches(arr) {
	return arr.filter( (e) => {
	    if (e.toLowerCase().split('').sort().join('') === this.myStr) {
	      if (e.toLowerCase() !== this.originalStr) {
	      	return e;
	      }
	    }
	})
  }
}
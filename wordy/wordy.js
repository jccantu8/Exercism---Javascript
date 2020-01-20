//Changed 'add then multiply' to -8 because this code uses eval() which takes order of operations into account.

export class WordProblem {
	constructor(question) {
		let strippedArr = question.replace('?', '').split(' ').filter(mathFilter).map(mathFilter).join('').replace(/\-{2}/, '+');
    this.val = eval(strippedArr);
    if (strippedArr.length === 2) {
      this.anyComputation = true;
    }
	}

	answer(){
    if (typeof(this.val) === 'undefined') {
      throw new Error('Irrelevant');
    } else if (this.anyComputation) {
      throw new Error('Too complex');
    } else {
      return this.val
    }
	}
	
}

function mathFilter(element) {
    let mathWords = {'plus' : '+', 'minus' : '-', 'multiplied' : '*', 'divided' : '/'}

    if (element.match(/^\-?[0-9]+$/)) {
      return parseInt(element);
    } else if (mathWords.hasOwnProperty(element)) {
      return mathWords[element];
    }
}
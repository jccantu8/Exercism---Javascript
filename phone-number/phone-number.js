export class PhoneNumber {
  constructor(originalStr) {
    this.originalStr = originalStr;
  }

  number() {
    let myStr = this.originalStr;

    myStr = myStr.replace(/[\+\(\)\.\-\s]/g, '');

    if(myStr.length !== 10 && myStr.length !== 11) {
    	return null;
    } else if(myStr.match(/[^0-9]/g) !== null) {
    	return null;
    } else if(myStr.length === 11){
    	if((parseInt(myStr.charAt(0)) === 1) && ((parseInt(myStr.charAt(1)) > 1) && (parseInt(myStr.charAt(4)) > 1))){
    		return myStr.slice(1);
    	} else {
    		return null;
    	}
    } else if(myStr.length === 10){
    	if(((parseInt(myStr.charAt(0)) > 1) && (parseInt(myStr.charAt(3)) > 1))) {
    		return myStr;
    	} else {
    		return null;
    	}
    } else {
    	return myStr;
    }
  }
}

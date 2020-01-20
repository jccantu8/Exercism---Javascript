//does not pass all the tests because I misunderstood what was being asked and thought this problem modeled more of a subSET where order does NOT matter.

export class List {
  constructor(list) {
  	if(list === undefined){
  		this.listVals = []
  	} else{
  		this.listVals = list
  	}
    
  }

  compare(myList) {
    if(this.listVals.length === 0 && myList.listVals.length === 0){
    	return 'EQUAL'
    } else if(this.listVals.length === 0 && myList.listVals.length > 0){
    	return 'SUBLIST'
    } else if(this.listVals.length > 0 && myList.listVals.length === 0){
    	return 'SUPERLIST'
    } else{
    	if(this.listVals.every( (e) => myList.listVals.includes(e))){
    		if(this.listVals.length === myList.listVals.length){
    			return 'EQUAL'
    		} else {
    			return 'SUBLIST'
    		}
    	} else if(myList.listVals.every( (e) => this.listVals.includes(e))){
    		return 'SUPERLIST'
    	} else{
    		return  'UNEQUAL'
    	}
    }
  }
}

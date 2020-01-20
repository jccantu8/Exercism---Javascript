export class Allergies {

  constructor(score) {
  	while (score > 255) {
  		score -= 256
  	}
  	this.score = score
    this.allergiesList = []
  }

  list() {
    for(let i = Object.keys(ALLERGIES).length - 1; i >= 0; i--){
    	if (this.score % ALLERGIES[Object.keys(ALLERGIES)[i]] < this.score){
    		this.allergiesList.push(Object.keys(ALLERGIES)[i])
    		this.score -= ALLERGIES[Object.keys(ALLERGIES)[i]]
    	}
    }

    return this.allergiesList.reverse()
  }

  allergicTo(allergy) {
    if (this.list().includes(allergy)) {
    	return true
    } else {
    	return false
    }
  }
}

export const ALLERGIES = {eggs : 1, peanuts : 2, shellfish : 4, strawberries : 8, tomatoes : 16, chocolate : 32, pollen : 64, cats: 128}	
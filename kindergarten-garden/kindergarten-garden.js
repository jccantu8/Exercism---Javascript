export class Garden {

  constructor(gardenStr, students = STUDENTS) {
    this.garden = gardenStr.split('\n')

    for(let i = 0; i < students.length; i++){
    	students = students.sort()
    	let kidsPlants = []

      if (this.garden[0][2*i] !== undefined){
        kidsPlants.push(PLANTS[this.garden[0][2*i]])
        kidsPlants.push(PLANTS[this.garden[0][2*i + 1]])
        kidsPlants.push(PLANTS[this.garden[1][2*i]])
        kidsPlants.push(PLANTS[this.garden[1][2*i + 1]])
      }

    	this[students[i].toLowerCase()] = kidsPlants
    }
  }

}

const PLANTS = {C: 'clover',
				G: 'grass',
				R: 'radishes',
				V: 'violets'};
				
const STUDENTS = [	'Alice',
					'Bob',
					'Charlie',
					'David',
					'Eve',
					'Fred',
					'Ginny',
					'Harriet',
					'Ileana',
					'Joseph',
					'Kincaid',
					'Larry'];
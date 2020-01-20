export class ResistorColorTrio {

  constructor(colorSelection) {
  	colorSelection.forEach( (e) => {
  		if (!COLORS.includes(e)){
  			throw new Error(/invalid color/)
  		}
  	})
    this.colorOne = colorSelection[0].toLowerCase();
    this.colorTwo = colorSelection[1].toLowerCase();
    this.colorThree = colorSelection[2].toLowerCase()
    this.magnitude = COLORS.indexOf(`${this.colorThree}`)
  }

  label() {
    let val = parseInt(("" + COLORS.indexOf(`${this.colorOne}`) + COLORS.indexOf(`${this.colorTwo}`))) * Math.pow(10,this.magnitude);

    let unit = ''

    if (val >= 0 && val <= 999) {
      unit = 'ohms';
    } else if (val >= 1000 && val <= 999999){
      val /= 1000
      unit = 'kiloohms';
    } else{
      unit = ''
    }

    return `Resistor value: ${val} ${unit}`
  }
}

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
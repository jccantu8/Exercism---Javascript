export const abilityModifier = (num) => {
  if(num < 3){
    throw new Error('Ability scores must be at least 3')
  } else if(num > 18){
    throw new Error('Ability scores can be at most 18')
  } else {
    return Math.floor((num - 10) / 2)
  }
};

export class Character {
  constructor(){
    this._strength = Character.rollAbility()
    this._dexterity = Character.rollAbility()
    this._constitution = Character.rollAbility()
    this._intelligence = Character.rollAbility()
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility()
  }

  static rollAbility() {
    let rollVals = []

    for(let i = 0; i < 4; i++){
      rollVals.push(Math.round(Math.random() * 6))
    }

    rollVals = rollVals.sort().slice(0, 3)

    return rollVals.reduce( (a,b) => a + b)
  }

  get strength() {
    return this._strength
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution
  }

  get intelligence() {
    return this._intelligence
  }

  get wisdom() {
    return this._wisdom
  }

  get charisma() {
    return this._charisma
  }

  get hitpoints() {
    return 10 + abilityModifier(this._constitution)
  }
}

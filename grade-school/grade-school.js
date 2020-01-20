export class GradeSchool {
  constructor() {
    this.rost = {};
  }

  roster() {
    return sortRost(this.rost);
  }

  add(name, gradeLevel) {
    if (this.rost[gradeLevel]) {
      this.rost[gradeLevel].push(`${name}`);
    }else {
      this.rost[gradeLevel] = [`${name}`];
    }
  }

  grade(gradeLevel) {
    if (this.rost[gradeLevel]) {
      return sortRost(this.rost)[gradeLevel];
    }else {
      return [];
    }
  }
}

function sortRost(rost) {
  for (let key in rost) {
      rost[key].sort();
    }
    Object.keys(rost).sort();
    return rost;
}
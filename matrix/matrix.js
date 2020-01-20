export class Matrix {
  constructor(matrixElements) {
    this.rows = matrixElements.split('\n').map(e => e.split(' ')).map(k => k.map(Number))
    this.columns = this.rows[0].map((col, i) => this.rows.map(row => row[i]));
  }
}

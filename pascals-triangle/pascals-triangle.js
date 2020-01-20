export class Triangle {
  constructor(size) {
  	this.size = size

  	if (this.size === 1) {
  		this.rows = [[1]]
  		this.lastRow = [1]
  	}else if (this.size === 2) {
  		this.rows = [[1],[1,1]]
  		this.lastRow = [1,1]
  	}else{
  		this.rows = [[1],[1,1]]
	    for (let i = 2; i < size; i++) {
	    	this.row = [1]
	    	for (let j = 0; j < (i-1); j++) {
	    		this.row.push(this.rows[i-1][j] + this.rows[i-1][j+1])
	    	}
	    	this.row.push(1)
	    	this.rows.push(this.row)
	    }
	    this.rows = this.rows
	    this.lastRow = this.rows[this.rows.length-1]
	  }
  }
}

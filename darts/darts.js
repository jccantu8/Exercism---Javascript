export const solve = (x,y) => {
  let d = Math.sqrt(x**2 + y**2)

  switch(d){
  	case (d>10):
  		return 0
  		break
  	case (d>5 && d<=10):
  		return 1
  		break
  	case (d>=1 && d<=5):
  		return 5
  		break
  	case (d<1):
  		return 10
  		break
  }

  if (d>10){
  	return 0
  } else if(d>5 && d<=10){
  	return 1
  } else if(d>1 && d<=5){
  	return 5
  } else{
  	return 10
  }
};

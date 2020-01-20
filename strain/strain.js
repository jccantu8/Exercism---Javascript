export const keep = (list, rule) => {
  let passed = []

  for(let i = 0; i < list.length; i++){
  	if(rule(list[i])){
  		passed.push(list[i])
  	}
  }

  return passed
};

export const discard = (list, rule) => {
  let failed = []

  for(let i = 0; i < list.length; i++){
  	if(!rule(list[i])){
  		failed.push(list[i])
  	}
  }

  return failed
};

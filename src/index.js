
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if(!matrix || matrix.length == 0) {
  	return [];
  }

  let result = [];

  matrix.forEach((a, i) => {
  	
  	if(i % 2 != 0) {
  		a.reverse();
  	} 

  	a.forEach(item => {
		result.push(item);
	})

  })

  return result;
}

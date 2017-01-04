const InvalidFibonacciException = require('./InvalidFibonacciException')

module.exports = {
  generateFib: length =>  {
  	if(typeof length === "string") {throw new InvalidFibonacciException();}
    var array = [1,1]
  	if(length===1) {return [1]};

  	for (i=0; i < (length - 2); i++)
  	  {
		var fibNum	= (array[array.length - 1] + array[array.length - 2]);
  		array.push(fibNum)
      }
  	
  	return array
  }
};

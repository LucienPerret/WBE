const SCRIPTS = require('./scripts.js')

require('./scripts.js')

let oldAndLiving = function(input){
	result = input.filter(x => x.year<0 && x.living == true)
	return result.map(x => x.name)
}
let numberOfCode = function(input){
	return input.ranges.map(y => y[1]-y[0]).reduce((partialSum,a)=>partialSum+a)
}
console.log(oldAndLiving(SCRIPTS))
console.log(numberOfCode(SCRIPTS[3]))

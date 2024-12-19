let findTag= function(inputString) {
	let regex = RegExp('<(\/?[a-z]*)>')
	let regexec = regex.exec(inputString)
	if(regexec !== null){
		return regexec[1]
	}	else {
		return undefined
	}
}
module.exports = { findTag }

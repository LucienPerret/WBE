let scriptOfSample = function (character, scripts) {
	characterCode = character.codePointAt(0)
	for(script of scripts){
		for(range of script.ranges){
			if(range[0]<=characterCode && range[1]>characterCode){
				return script.name
			} else {
				result = 'unknown'
			}
		}
	}
	return result
}
module.exports = { scriptOfSample }






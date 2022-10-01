// Similar to .error(), used to print stderror
// Not a full error or crash, but a warning ...
const dreams = ["Fullstack developer and designer for Life", "Not a dreamer"];
const pattern = /develop/gim;
const patternAlt = /design/gim;
for (let dream of dreams){
	let matchThis = dream.match(pattern);
	let matchThat = dream.match(patternAlt);
	if (!matchThis ||  !matchThat)
		{
			console.warn(`Warning: ${pattern} not in "${dream}"`);
			console.warn(`Warning: ${patternAlt} not in "${dream}"`);
		} else 
		{
			console.log(matchThis.length, "Occurences of pattern:", pattern );
			console.log(matchThis.length, "Occurences of pattern:", patternAlt );
		}	
}


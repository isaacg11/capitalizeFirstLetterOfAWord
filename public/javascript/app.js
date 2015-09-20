
function LetterCapitalize(str){
	var c = [];
	var sep = str.split(" ");
	for(var i=0;i<sep.length;i++){
		c.push(sep[i][0].toUpperCase()+sep[i].slice(1));
	}

	return c.join(" ");
}
console.log(LetterCapitalize("abe bumped cory"));
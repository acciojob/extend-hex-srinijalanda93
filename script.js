const extendHex = (shortHex) => {
  // write your code here
	let i=shortHex.length-3,isCapital=false;
	let ouput="#";
	while(i<shortHex.length){
		let asciicode=shortHex[i].charCodeAt(0);
		if(asciicode>=65 && asciicode<=90){
			isCapital=false;
		}
		output+=shortHex[i]+shortHex[i];
	}
	return isCapital?output.toUpperCase():output;
};

 // Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

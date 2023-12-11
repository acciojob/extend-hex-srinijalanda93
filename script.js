const extendHex = (shortHex) => {
 let i = shortHex.length - 3;
  let isCapital = false; // initialize as true
  let output = "#"; // fix the typo

  while (i < shortHex.length ) { // fix the loop condition
    let asciiCode = shortHex[i].charCodeAt(0);
    if (asciiCode >= 65 && asciiCode <= 90) {
      isCapital = true; // set to true when character is uppercase
    }
    output += shortHex[i] + shortHex[i];
    i++;
  }

  return isCapital ? output.toUpperCase() : output;
};

 // Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

const reverseString = function(str) {


  //Split string
  let splitString = str.split("");
  // string becomes an array of characters
  // "lodicake" =====> ["l", "o", "d", "i", "c", "a", "k", "e"]

  let reverseArray = splitString.reverse();
  // ["e", "k", "a", "c", "i", "d", "o", "l"]

  let joinArray = reverseArray.join(""); 
  // reversed array becomes a string again
  // ["e", "k", "a", "c", "i", "d", "o", "l"] =====> "ekacidol"

  return joinArray;


  // Short method
  // return str.split("").reverse().join("");



};

// Do not edit below this line
module.exports = reverseString;

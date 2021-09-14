var text =  "";
var Verschieber = 8;


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 

function CaesarCipher(str, key){

  var lowerCaseStr = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxy'.split('');
  var newStr = '';

  for(var i = 0; i < lowerCaseStr.length; i++){
      var currentlayer = lowerCaseStr[i];
      if(currentlayer === ''){
          newStr += currentlayer;
          continue;
      }
      var currentIndex = alphabet.indexOf(currentlayer);
      var newIndex = currentIndex + key;
      if(newIndex >25) newIndex = newIndex - 26;
      if(newIndex <0) newIndex = newIndex +26;
      if(str[i] === str[i].toUpperCase()) {
          newStr += alphabet[newIndex].toUpperCase();
      }
      else newStr += alphabet[newIndex];
  }
  console.log("Output : " + newStr);
  return newStr;
}

readline.question("Text zum verschlüsseln oder entschlüsseln : ", vtext => {
    
    text = `${vtext}`;
    text = text.toUpperCase()
    readline.question('key: ', key => {
    
      Verschieber = parseInt(`${key}`);
      CaesarCipher(text, Verschieber)
      readline.close(); 
    });
    
});




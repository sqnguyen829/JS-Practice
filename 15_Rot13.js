function rot13(message){
    let newString = ''
    for(let i=0; i<message.length; i++){
      newString = newString + checkChar(message[i])
    }
    return newString
  }
  
  function checkChar(char){
    let alp = 'abcdefghijklmnopqrstuvwxyz'
    return alp.includes(char.toLowerCase()) ? convertChar(char, alp) : char
  }
  
  function convertChar(char, alp){
    if(char === char.toLowerCase()){
      return alp[(alp.indexOf(char)+13) % 26]
    }else{
      return alp[(alp.indexOf(char.toLowerCase())+13) % 26].toUpperCase()
    }
  }

//   ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

//   Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be 
//   returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// EX:

// "test" => "grfg"
// "Test" => "Grfg"
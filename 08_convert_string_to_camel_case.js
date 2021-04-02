function toCamelCase(str){
    let alp = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let arr = str.split('')
    
    arr = arr.map(function(v,i){
      if(alp.includes(v) && alp.includes(arr[i - 1])){
        return arr[i]
      }else if(!alp.includes(arr[i - 1]) && alp.includes(v)){
          if(i===0){
            return v
          }else{
            return v.toUpperCase()
          }
      }
    })
    return arr.join('')
  }

//   Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized (known as 
//     Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
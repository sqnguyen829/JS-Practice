function validParentheses(parens){
    //TODO 
    if(parens.length===0){
      return true
    }
    let pArr = parens.split('')
    let openP = 0
    let closeP = 0
    let validCheck = false
    
    for(let i=0; i<pArr.length; i++){
      if(pArr[i]==='('){
        openP++
        validCheck = false
      }else if(openP>closeP){
        closeP++
        validCheck = openP === closeP? true:false
      }else{
        validCheck = false
      }  
    }
    return validCheck && openP === closeP? true:false
  }

//   Write a function that takes a string of parentheses, and determines if the order of the parentheses 
//is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
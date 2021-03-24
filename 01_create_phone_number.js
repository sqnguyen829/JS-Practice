// Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let phoneNum = ""
    
    phoneNum = numbers.map((num, index) => {
      if(index === 0){
        return `(${num}`
      }else if(index === 2){
        return `${num}) `
      }else if(index === 6){
        return `-${num}`
      }else{
        return `${num}`
      }
    })
    
    return phoneNum.join('')
  }
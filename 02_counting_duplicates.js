function duplicateCount(text){
    //...
    //convert to lowercase
    //add chars as keys in the object that store the count as the value
    //then decide if the count is more then 2
    let textObj = {}
    let cText = text.toLowerCase().split('')
    let dupCount = 0
    for(let i=0; i<cText.length; i++){
      if(textObj[cText[i]]){
        if(textObj[cText[i]] < 2){
          dupCount++
        }
        textObj[`${cText[i]}`]++
      }else{
        textObj[`${cText[i]}`] = 1
      }
    }
    
    return dupCount
  }

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
function generateHashtag (str) {
    let newArr = []
    
    str.split(' ').forEach( word => {
      if(word.length != 0){
        newArr.push(word)
      }
    })
    
    if(newArr.join('').length != 0 && newArr.join('').length < 140){
      return '#' + newArr.map(word => {
        return word[0].toUpperCase() + word.split('').splice(1,word.length).join('')
      }).join('')
    }else{
      return false
    }
  }


//   The marketing team is spending way too much time typing in hashtags.
//   Let's help them with our own Hashtag Generator!
  
//   Here's the deal:
  
//   It must start with a hashtag (#).
//   All words must have their first letter capitalized.
//   If the final result is longer than 140 chars it must return false.
//   If the input or the result is an empty string it must return false.

//   Examples
//   " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
//   "    Hello     World   "                  =>  "#HelloWorld"
//   ""                                        =>  false
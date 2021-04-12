function solution(list){
    // TODO: complete solution 
     let startRange = 0
     let trackCount = 0
     let trackRange = false
     let newList = []
     
     for(let i=0; i<list.length; i++){
       let nextNum = list[i+1]
       let curNum = list[i]
       
       if(curNum+1 === nextNum){
         if(trackRange){
           trackCount++
         }else{
           startRange = list[i]
           trackRange = true
           trackCount = 1
         }
       }else{
         
         if(trackRange){
           if(trackCount>1){
             let numRange = `${startRange}-${list[i]}`
             newList.push(numRange)
           }else{
             newList.push(list[i-1])
             newList.push(list[i])
           }
           trackRange = false
         }else{
           newList.push(list[i])
           trackRange = false
         }
       }
     }
       return newList.join(',')
   }

//    A format for expressing an ordered list of integers is to use a comma separated list of either
//    individual integers
//    or a range of integers denoted by the starting integer separated from the end integer in the range 
//    by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered 
//    a range unless it spans at least 3 numbers. For example "12,13,15-17"
//    Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
   
//    Example:
   
//    solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
//    // returns "-6,-3-1,3-5,7-11,14,15,17-20"
function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9 
    let sudoCubes = []
    let sudoRows = puzzle
  //   let sudoCols = getCols(puzzle)
    
    getCubes(puzzle)
  }
  
  function getCols(puz){
    let colArr = [[],[],[],[],[],[],[],[],[]]
    for(let i=0; i<puz.length; i++){
      for(let j=0; j<puz[i].length; j++){
        colArr[i][j] = puz[j][i]
      }
    }
    return colArr
  }


//   incomplete
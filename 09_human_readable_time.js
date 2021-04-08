function humanReadable(seconds) {
  
    let h = Math.floor(seconds/3600)
    let m = Math.floor(Math.floor(seconds%3600)/60)
    let s = Math.floor(seconds%60)
    
    h = h<=9 ? `0${h}` : h 
    m = m<=9 ? `0${m}` : m 
    s = s<=9 ? `0${s}` : s 
    
    return `${h}:${m}:${s}`
  }

//   Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//   HH = hours, padded to 2 digits, range: 00 - 99
//   MM = minutes, padded to 2 digits, range: 00 - 59
//   SS = seconds, padded to 2 digits, range: 00 - 59
//   The maximum time never exceeds 359999 (99:59:59)
  
//   You can find some examples in the test fixtures.
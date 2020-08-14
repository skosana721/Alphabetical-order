const sortAlpha =(str) => {
   return str.split("").sort((a, b) => a.localCompare(b)).join("");  
}
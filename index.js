const sortAlpha =(str) => {
   return str.split("").sort((a, b) => a.localeCompare(b)).join("");  
}

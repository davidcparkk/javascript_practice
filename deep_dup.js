// Recursive method that will perform deep duplication of interior arrays

function deepDup(arr){
  return arr.map( (el) => el.constructor.name === "Array" ? deepDup(el) : el);
}
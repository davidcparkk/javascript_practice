// Write a recursive method that returns the first 'num' factorial numbers
// Note that the 1st factorial number is 0!, which equals 1. The second factorial is 1!
// the 3rd is 2! and etc

function factorialsRec(num) {
  if (num === 1) return [1];

  // memoize facs
  const facs = factorialsRec(num-1);
  facs.push(facs[facs.length - 1] * (num-1));
  return facs;
}
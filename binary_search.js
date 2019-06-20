// Monkey patch binary search:
// [1,2,3,4,5,6,7].my_bsearch(5) => 4

Array.prototype.myBsearch = function(target) {
  if (this.length === 0) return null;

  const mid = Math.floor(this.length / 2);

  if (this[mid] === target) {
    return mid;
  } else if (this[mid] > target) {
    return this.slice(0,mid).myBsearch(target);
  } else {
    const result = this.slice(mid+1, this.length).myBsearch(target);
    return result === null ? result : mid + 1 + result;
  }

}
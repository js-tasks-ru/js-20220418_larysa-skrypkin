/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (arr === undefined || !arr.length) {
    return [];
  }
  return [...new Set(arr)];
}


uniq([1, 2, 2, 3, 1, 4]); // [1, 2, 3, 4]
uniq(['a', 'a', 'b', 'c', 'c']); // ['a', 'b', 'c']

console.log(uniq([1, 2, 2, 3, 1, 4]));
console.log(uniq(['a', 'a', 'b', 'c', 'c']));
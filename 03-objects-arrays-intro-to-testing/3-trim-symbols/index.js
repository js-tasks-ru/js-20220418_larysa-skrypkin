/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */


export function trimSymbols(string, size) {
  if (size === undefined) {
    return string;
  } 
  if (size === 0) {
    return "";
  }
  const simbosArray = charSplit(string);
  const res = simbosArray.map(arr => {
    const length = arr.length - size;
    const num = arr.length >= size ? length : 0;
    if (num === 0) {
      return arr;
    }
    return arr.substring(0, size);
  });
  return res.join('');
}

function charSplit(str) {
  const arr = [];
  let l = -1;
  let j = -1;
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    l === c ? arr[j] += c : arr[++j] = c;
    l = c;
  }
  return arr;
}


console.log(trimSymbols('xxx', 3)); // 'xxx' - ничего не удалили т.к разрешено 3 символа подряд
console.log(trimSymbols('xxx', 2)); // 'xx' - удалили один символ
console.log(trimSymbols('xxx', 1)); // 'x'

console.log(trimSymbols('xxxaaaaa', 2)); // 'xxaa'
console.log(trimSymbols('xxxaaaaab', 3)); // 'xxxaaab'
console.log(trimSymbols('xxxaaxx', 1)); //xax
console.log(trimSymbols('xxxaxxx', 2)); //xxaxx
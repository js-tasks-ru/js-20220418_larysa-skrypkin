/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} [arr=[]] arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  switch (param) {
  case 'asc':
    return makeSorting(arr, 1);
  case 'desc':
    return makeSorting(arr, -1);
  default:
    throw new Error('Parameter error!');
  }

  function makeSorting(array, direction) {
    return [...array].sort((string1, string2) =>
      direction * string1.localeCompare(string2, ['ru', 'en'], {caseFirst: 'upper'}));
  }
}

// function sortStrings(arr, param = 'asc') {
//   const collator = new Intl.Collator(['ru', 'en'], {caseFirst: 'upper'});
//   const directions = {
//     asc: 1,
//     desc: -1
//   };

//   const direction = directions[param];
//   return [...arr].sort((string1, string2) =>
//     direction * collator.compare(string1, string2));
// }

sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'ёжик', 'Ёжик'], 'asc'); 


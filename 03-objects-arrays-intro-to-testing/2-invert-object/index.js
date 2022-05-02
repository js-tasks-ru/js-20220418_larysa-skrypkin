/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */

const obj = { key: 'value' };
const empty = {};


export function invertObj(object) {
  if (!object) {
    return undefined;
  }
  const values = Object.entries(object).map(item => item.reverse());
  return Object.fromEntries(values);
}

console.log(invertObj(obj)); // { value: 'key'}
console.log(invertObj(empty)); // {}
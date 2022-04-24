/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields) => {
  const optionsArray = Object.entries(obj);
  let finalOptions = [];
  
  optionsArray.forEach(arr => {
    fields.forEach(el => {
      if (!arr.includes(el)) {
        return;
      } else {
        finalOptions.push(arr);
      }
    });
  
  });

  const res = finalOptions.length ? makeObjectFromArray(finalOptions) : {};
  return res;
};

function makeObjectFromArray(array) {
  return array.reduce((elem, acc) => {
    elem[acc[0]] = acc[1];
    return elem;
  }, {});
}

const fruits = {
  apple: 2,
  orange: 4,
  banana: 3
};

console.log(pick(fruits, 'apple', 'banana')); // { apple: 2, banana: 3 }

const obj = {foo: 'foo', bar: 'bar', baz: 'baz'};

console.log(pick(obj, 'riba'));

const obj2 = {foo: 'foo', bar: 'bar'};

console.log(pick(obj2, 'foo'));

const obj3 = {foo: 'foo', bar: 'bar', baz: 'baz'};

console.log(pick(obj3, 'foo', 'bar'));
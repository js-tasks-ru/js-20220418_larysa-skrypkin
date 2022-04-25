/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const optionsArray = Object.entries(obj);
  const optionsKeys = Object.keys(obj);

  let omitOptions = [];
  let finalOptions = [];

  optionsKeys.forEach(opt => fields.includes(opt) ? '' : omitOptions.push(opt));

  optionsArray.forEach(arr => {
    omitOptions.forEach(el => arr.includes(el) ? finalOptions.push(arr) : ''
    );
  
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

console.log(omit(fruits, 'apple', 'banana')); // Вернет обїект - { orange: 4 }
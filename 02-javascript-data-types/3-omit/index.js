/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const optionsArray = Object.entries(obj);
  let finalOptions = [];

  const omitOptions = Object.keys(obj).filter(opt => !fields.includes(opt));

  optionsArray.forEach(arr => {
    omitOptions.forEach(el => arr.includes(el) ? finalOptions.push(arr) : ''
    );
  
  });

  const res = finalOptions.length ? Object.fromEntries(finalOptions) : {};
  return res;
};


const fruits = {
  apple: 2,
  orange: 4,
  banana: 3
};

console.log(omit(fruits, 'apple', 'banana')); // Вернет обїект - { orange: 4 }
/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

const product = {
  category: {
    title: "Goods"
  }
};

const product1 = {
  category: {
    title: {
      value: "Goods"
    }
  }
};

const product2 = {
  category: "Service"
};

export function createGetter(string) {
  const values = string.split('.');

  return function (obj) {

    if (Object.keys(obj).length === 0) {
      return undefined;
    }

    values.forEach(val => {
      if (obj[val] === null) {
        return;
      }
      obj = obj[val];
    });
    return obj;
  };
}

const getter = createGetter('category.title');

console.log(getter(product)); // Goods

const getter1 = createGetter('category.title.value');

console.log(getter1(product1)); // Goods

const getter2 = createGetter('category');

console.log(getter2(product2)); // Service

const getter3 = createGetter('nested.property');
console.log(getter3({}));

const getter4 = createGetter('test.test');
const obj = {test: null};
console.log(getter4(obj));
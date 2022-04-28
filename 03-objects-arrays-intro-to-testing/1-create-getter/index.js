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
    switch (values.length) {
    case 1:
      return obj[values[0]];
    case 2:
      return obj[values[0]][values[1]];
    case 3:
      return obj[values[0]][values[1]][values[2]];
    case 4:
      return obj[values[0]][values[1]][values[2]][value[4]];
    default:
      throw new Error('The value does not exists');
    }
  };
}

const getter = createGetter('category.title');

console.log(getter(product)); // Goods

const getter1 = createGetter('category.title.value');

console.log(getter1(product1)); // Goods

const getter2 = createGetter('category');

console.log(getter2(product2)); // Service


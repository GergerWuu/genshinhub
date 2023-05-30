export const TYPES = {
  String: 'String',
  Number: 'Number',
  Null: 'Null',
  Undefined: 'Undefined',
  Array: 'Array',
  Object: 'Object',
  Boolean: 'Boolean',
};

export const is = (value, type) => {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
};

export const changeObjectToQS = (obj) => {
  const res = Object.entries(obj).reduce((str, [key, value]) => {
    return `${str ? `${str}&` : str}${key}=${value}`;
  }, '');

  return res;
};

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

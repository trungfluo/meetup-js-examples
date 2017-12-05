/* @flow */

type Collection = {
  [vehicle: string]: ?number,
};
const collection: Collection = {
  ferrari: 100000,
  mercedes: 40000,
  clio: null,
};

console.log(collection);
console.log(collection.ferrari.toFixed(1));

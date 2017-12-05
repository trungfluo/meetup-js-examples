// @flow

type Auto = {
  vehicle: string,
};

type Home = {
  surface: number,
};

type Product = { auto: Auto } | { home: Home };

function method(product: Product) {
  if (product.vehicle) {
    (product.vehicle: string);
  }
}

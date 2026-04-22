let products = require("../data/products");

exports.getAll = async () => {
  return products;
};

exports.create = async ({ name, price }) => {
  const newProduct = {
    id: Date.now(),
    name,
    price,
  };

  products.push(newProduct);
  return newProduct;
};

exports.update = async (id, data) => {
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) return null;

  products[index] = {
    ...products[index],
    ...data,
  };

  return products[index];
};

exports.remove = async (id) => {
  const exists = products.some((p) => p.id === id);

  if (!exists) return false;

  products = products.filter((p) => p.id !== id);
  return true;
};
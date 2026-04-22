const service = require("../services/productService");
const response = require("../utils/response");
const asyncHandler = require("../utils/asyncHandler");

exports.getAllProducts = asyncHandler(async (req, res) => {
  const data = await service.getAll();
  return response.success(res, data);
});

exports.createProduct = asyncHandler(async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return response.error(res, "Name and price required", 400);
  }

  const data = await service.create({ name, price });

  return response.success(res, data, "Product created");
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);

  const updated = await service.update(id, req.body);

  if (!updated) {
    return response.error(res, "Product not found", 404);
  }

  return response.success(res, updated, "Product updated");
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  const id = parseInt(req.params.id);

  const deleted = await service.remove(id);

  if (!deleted) {
    return response.error(res, "Product not found", 404);
  }

  return response.success(res, null, "Product deleted");
});
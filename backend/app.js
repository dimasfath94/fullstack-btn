const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

// routes
app.use("/products", productRoutes);

// health check
app.get("/", (req, res) => {
  res.send("API Running...");
});

// error handler (HARUS paling bawah)
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
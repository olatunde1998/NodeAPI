const express = require("express");
const Product = require("./models/productModel");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.get("/", (req, res) => {
  res.send("Hello world, thank you Rasheed");
});
app.get("/blog", (req, res) => {
  res.send("Hello world, thank you Rasheed blog route");
});


// create product
app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//fetch all product
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//fetch a single product
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Update a product
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //we cannot find any product in database
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


//Delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});




mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://geodevcode:geodev0987654321@geodevapi.5cwlvpl.mongodb.net/NODE-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(3000, () => {
      console.log("Node API app is running on Port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

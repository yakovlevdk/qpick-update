const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const {
  getUsers,
  registerUser,
  loginUser,
  addInfoUser,
} = require("./controllers/user-controller");
const {
  getProducts,
  addProduct,
  deleteProduct, 
  updateProduct
} = require("./controllers/products-controller");
const {
  getBaskets,
  addToBasket,
  changeQuantityBasket,
  deleteFromBasket,
  getUserBasket
} = require("./controllers/basket-controller");
const authenticated = require('./middlewares/auth-middleware')
const { getReviews, addReview } = require("./controllers/review-controller");
app.set("view engine", "ejs");
app.set("views", "pages");
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/register", async (req, res) => {
  const token = await registerUser(req.body.email, req.body.password);
  res.cookie("token", token, {
    // httpOnly: true,
  });
  res.status(200).json({ message: "Registred in successfully" });
});

app.post("/login", async (req, res) => {
  const token = await loginUser(req.body.email, req.body.password);
  res.cookie("token", token, {
    // httpOnly: true,
  });
  res.status(200).json({ message: "Logged in successfully" });
});
app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const token = await addInfoUser(
    req.body.id,
    req.body.nameInfo,
    req.body.countryInfo
  );
  res.cookie("token", token);
  return res.status(200).json({ message: "change true" });
});
app.post("/logout", async (req, res) => {
  res.cookie("token", "");
  return res.status(401).json({ message: "Unauthorized" });
});
app.get("/products", async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

app.post("/products", async (req, res) => {
  await addProduct(req.body);
});

app.get("/baskets", async (req, res) => {
  const baskets = await getBaskets();
  res.json(baskets);
});

app.post("/changequantity", async (req, res) => {
  await changeQuantityBasket(
    req.body.userId,
    req.body.productId,
    req.body.operator
  );
});


app.get("/reviews", async (req, res) => {
  const reviews = await getReviews();
  res.json(reviews);
});

app.post("/reviews", async (req, res) => {
  console.log('nexuy')
  await addReview(
    req.body.productId,
    req.body.userId,
    req.body.userName,
    req.body.rate,
    req.body.content
  );
});


app.use(authenticated);
app.put('/products/edit/:id', async (req, res) => { 
  try {
    console.log('Updating product:', req.params.id, req.body); // Log to confirm the details received
    const updatedProduct = await updateProduct(req.params.id, req.body); // Call updateProduct with the full request body
    return res.status(200).json(updatedProduct); // Send the updated product as a response
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ message: "Error updating product" });
  }
});

app.post("/baskets", async (req, res) => {
  await addToBasket(req.body.userId, req.body.productId);
});
app.delete("/baskets", async (req, res) => {
  await deleteFromBasket(req.body.userId, req.body.productId);
  console.log('11');
  return res.status(204).send();
});


app.get('/basket/:id', async(req,res) => { 
  const userBasket = await getUserBasket(req.params.id)
res.json(userBasket)
})


app.delete('/deleteProduct/:id', async(req,res) =>  { 

 await deleteProduct(req.params.id)
 return res.status(204).send()
})


mongoose
  .connect(
    "mongodb+srv://yakovlevdk39:lasos2281@cluster0.0k8rc.mongodb.net/qpick?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    app.listen(port, () => {
      console.log(`Server has been started on port ${port}`);
    });
  });

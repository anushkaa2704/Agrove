const express = require('express');
const cors = require ('cors');
const mongoose = require ('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

//mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/agroveDB") // agroveDB is db name
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(" MongoDB Error:", err));


const userSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);


//routes
app.post("/signup", async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing fields" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const newUser = new User({ name, mobile, email, password });
    await newUser.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Server error" });
  }
});

//dashboard mdhe hello cha pudhe farmer cha naav ala pahijey
app.get("/user/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.json({ name: "Farmer" });
    res.json({ name: user.name });
  } catch (err) {
    console.error(err);
    res.json({ name: "Farmer" });
  }
});

//login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.json({ success: false });

  if (user.password !== password) return res.json({ success: false });

  res.json({ success: true });
});






app.listen(5000, () => {
  console.log(" Server is running........");
});

// app.use('cors()');
// Allows frontend (5173) to communicate with backend (5000).
// app.use(express.json())
// Allows backend to read JSON data coming from frontend.

// userSchema
// This defines the structure of a user in MongoDB — what fields a user will have (name, mobile, email, password) and their data types.
// ✔ User model
// This creates a MongoDB collection named users and allows you to add, read, update, delete user data using User.
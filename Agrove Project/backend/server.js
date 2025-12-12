const express = require('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const twilio = require('twilio');


const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

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
  otp: String,          
  otpExpires: Date      
});


const User = mongoose.model("User", userSchema);


//routes
app.post("/signup", async (req, res) => {
  const { name, mobile, password, confirmPassword } = req.body;

  if (!name || !mobile || !password || !confirmPassword) {
    return res.json({ success: false, message: "Missing fields" });
  }

  if (password !== confirmPassword) {
    return res.json({ success: false, message: "Passwords do not match" });
  }

  const existingUser = await User.findOne({ mobile });
  if (existingUser) {
    return res.json({ success: false, message: "Mobile already registered" });
  }

  const newUser = new User({ name, mobile, password });
  await newUser.save();

  res.json({ success: true, message: "Signup successful" });
});


//login route
app.post("/login-password", async (req, res) => {
  const { mobile, password } = req.body;

  const user = await User.findOne({ mobile });
  if (!user) return res.json({ success: false, message: "User not found" });

  if (user.password !== password)
    return res.json({ success: false, message: "Wrong password" });

  res.json({ success: true, message: "Login successful", name: user.name });
});


const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
app.post("/send-otp", async (req, res) => {
  const { mobile } = req.body;
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  if (!mobile) {
    return res.json({ success: false, message: "Mobile number required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = Date.now() + 2 * 60 * 1000; 

  // save otp in database
  await User.findOneAndUpdate(
    { mobile },
    { otp: otp, otpExpires: otpExpires },
    { upsert: true }
  );

  try {
    await client.messages.create({
      body: `Your Agrove OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+91${mobile}`
    });

    console.log("OTP sent:", otp);

    res.json({ success: true, message: "OTP sent successfully" });

  } catch (err) {
    console.log("Twilio Error Code:", err.code);
    console.log("Twilio Error Message:", err.message);

    res.json({ success: false, message: "Failed to send OTP", error: err.message });
  }
});




//verify otp
app.post("/verify-otp", async (req, res) => {
  const { mobile, otp } = req.body;

  const user = await User.findOne({ mobile });

  if (!user) 
    return res.json({ success: false, message: "User not found" });

  if (user.otp !== otp)
    return res.json({ success: false, message: "Invalid OTP" });

  if (Date.now() > user.otpExpires)
    return res.json({ success: false, message: "OTP expired" });

  // OTP successful
  return res.json({ 
    success: true, 
    message: "OTP Verified", 
    name: user.name 
  });
});


app.get("/user-mobile/:mobile", async (req, res) => {
  try {
    const user = await User.findOne({ mobile: req.params.mobile });
    if (!user) return res.json({ name: "Farmer" });
    res.json({ name: user.name });
  } catch (err) {
    console.error(err);
    res.json({ name: "Farmer" });
  }
});




// FIELD SCHEMA
const fieldSchema = new mongoose.Schema({
  userEmail: String, 
  name: String,
  crop: String,
  area: String,
  soilType: String
});

const Field = mongoose.model("Field", fieldSchema);



// ADD FIELD API
app.post("/add-field", async (req, res) => {
  const { userEmail, name, crop, area, soilType } = req.body;

  try {
    const newField = new Field({
      userEmail,
      name,
      crop,
      area,
      soilType
    });

    await newField.save();

    res.json({ success: true, message: "Field added successfully" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error saving field" });
  }
});

// ------------------ GET ALL FIELDS FOR USER ------------------
app.get("/fields", async (req, res) => {
  const { email } = req.query;

  try {
    const fields = await Field.find({ userEmail: email });
    res.json(fields);
  } catch (err) {
    console.log(err);
    res.json([]);
  }
});

// ------------------ DELETE FIELD ------------------
app.delete("/fields/:id", async (req, res) => {
  try {
    await Field.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Field deleted" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Delete failed" });
  }
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
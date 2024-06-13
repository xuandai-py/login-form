const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("node:crypto");
const cors = require("cors");

const PORT = 3000;
const PSEUDO_USERNAME = "admin";
const PSEUDO_PASSWORD = "admin";

const app = express();


var corsOptions = {
    origin: ['https://react-form.daidesu.dev'],
    //origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/login",  async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(401).json({ message: "Missing username or password" });
    }

    if (username !== PSEUDO_USERNAME) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const hashedPassword = await bcrypt.hash(PSEUDO_PASSWORD, 10);
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const key = crypto.randomBytes(64).toString("hex");

    // gen simple token
    return res.status(200).json({
      message: "Login successful",
      tokens: jwt.sign({ username }, key, { expiresIn: "7d" }),
      username: PSEUDO_USERNAME,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/logout", (req, res) => {
  //inpect valid jwt
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    res.status(400).json({ message: "No jwt cookie found" });
  }
  // valid user
  //clear cookie
  res.clearCookie("jwt", { httpOnly: true, sameSite: "Strict", secure: true });
  res.status(200).json({ message: "Logout successful" });
});
app.listen(3000, () => console.log(`Server is running on port: ${PORT}`));

// module.exports = app;

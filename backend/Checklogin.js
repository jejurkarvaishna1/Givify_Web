const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql@123",
  database: "Food",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the 'Food' database");
});

app.post("/login", (req, res) => {
  const { Email, password } = req.body;
  const sql = "SELECT * FROM Users WHERE Email = ? AND password = ?";
  const values = [Email, password];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing login query: " + err.stack);
      return res.status(500).json({ error: "Login failed" });
    }

    if (results.length === 0) {
      // No matching records found
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Login successful
    return res.status(200).json({ message: "Login successful" });
  });
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

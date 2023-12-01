const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

app.post("/signup", (req, res) => {
  const { Email, F_Name, Phone_no, password } = req.body;
  const sql =
    "INSERT INTO Users (Email, F_Name, Phone_no, password) VALUES (?, ?, ?, ?)";
  const values = [Email, F_Name, Phone_no, password]; // Make sure to use the correct column names

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data: " + err.stack);
      return res.status(500).json({ error: "Error registering user" });
    }

    console.log("User registered with ID: " + result.insertId);
    res.status(200).json({ message: "User registered successfully" });
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



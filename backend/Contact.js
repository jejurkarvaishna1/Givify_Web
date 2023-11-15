const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql@123",
  database: "Food",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    // Handle the error here (e.g., terminate the server or log the error).
  } else {
    console.log("Database connection established successfully");
    // You can start your server or perform other actions here.
    app.post("/contact", (req, res) => {
      const { name, email, message } = req.body;
      //     const name = "John Doe";
      // const mail = "johndoe@example.com";

      // console.log("here");
      const sql = "INSERT INTO contact (name, email,message) VALUES (?, ?,?)";

      const values = [name, email, message];

      db.query(sql, values, (err, data) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "Error inserting data into the database" });
        }
        return res.json({ message: "Data inserted successfully" });
      });
    });
  }
});

app.listen(3500, () => {
  console.log("Listening on port 3500");
});

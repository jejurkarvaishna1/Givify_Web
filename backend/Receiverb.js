const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql@123", // Use environment variables for sensitive data.
  database: "Food",
});
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    // Handle the error here (e.g., terminate the server or log the error).
  } else {
    console.log("Database connection established successfully");

    app.get("/receive", (req, res) => {
      // Define a SQL query to retrieve data from your database
      const sql =
        "SELECT ID, name, email, phone, foodCategory, foodQuantity, foodDate, area, collectionAddress, message,status FROM donate";

      // Execute the query
      db.query(sql, (err, results) => {
        if (err) {
          console.error("Error executing database query:", err);
          res.status(500).json({ error: "Database query failed" });
        }
        // Return the retrieved data as JSON
        const donations = results;
        res.json(results);
      });
    });

    // Add a new endpoint for searching donations by area
    app.get("/search", (req, res) => {
      const { area } = req.query;

      // Define a SQL query to retrieve donations by area
      const sql = "SELECT * FROM donate WHERE area = ?";

      // Execute the query with the provided area parameter
      db.query(sql, [area], (err, results) => {
        if (err) {
          console.error("Error executing database query:", err);
          res.status(500).json({ error: "Database query failed" });
        }
        // Return the retrieved data as JSON
        const donations = results;
        res.json(donations);
      });
    });

    app.post("/request", (req, res) => {
      const { name, email, phone } = req.body;

      const sql = "INSERT INTO request (name, email,phone) VALUES (?, ?,?)";

      const values = [name, email, phone];

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

    app.post("/updateStatus", (req, res) => {
      const { ID, status } = req.body;

      // Define a SQL query to update the status of a donation order by ID
      const sql = "UPDATE donate SET status = ? WHERE ID = ?";
      console.log(ID + "back");

      // Execute the query with the provided donationDID and status
      db.query(sql, [status, ID], (err, results) => {
        if (err) {
          console.error("Error updating status:", err);
          res.status(500).json({ error: "Status update failed" });
        } else {
          console.log(ID + "back2");
          res.json({ message: "Status updated successfully" });
          app.get("/receive", (req, res) => {
            // Define a SQL query to retrieve data from your database
            const sql =
              "SELECT ID, name, email, phone, foodCategory, foodQuantity, foodDate, area, collectionAddress, message,status FROM donate";

            // Execute the query
            db.query(sql, (err, results) => {
              if (err) {
                console.error("Error executing database query:", err);
                res.status(500).json({ error: "Database query failed" });
              }
              // Return the retrieved data as JSON
              const donations = results;
              res.json(results);
            });
          });
        }
      });
    });
  }
});

app.listen(7800, () => {
  console.log("Listening on port 7800");
});


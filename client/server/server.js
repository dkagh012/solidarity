const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors"); // Add this line to import the 'cors' module
const mysql = require("mysql");
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "project",
});
app.use(cors()); // Set up CORS middleware to handle CORS headers

// Serve the built React app (the 'build' folder) from the 'src' folder
app.use(express.static(path.join(__dirname, "../../src/build")));

// Handle requests for the root URL '/'
app.get("/", function (req, res) {
  // Send the 'index.html' file from the built React app
  res.sendFile(path.join(__dirname, "../../src/build", "index.html"));
});
db.query("SELECT 1", (error, result) => {
  if (error) {
    console.error("Query execution error:", error);
  } else {
    console.log("Query execution result:", result);
  }

  // Close the pool gracefully
  db.end();
});
// Start the server on port 8080
app.listen(8080, function () {
  console.log("Server listening on port 8080");
});

const express = require("express");
const app = express();
const path = require("path");

// Serve the built React app (the 'build' folder) from the 'DATE' folder
app.use(express.static(path.join(__dirname, "../../src//build")));

// Handle requests for the root URL '/'
app.get("/", function (req, res) {
  // Send the 'index.html' file from the built React app
  res.sendFile(path.join(__dirname, "../../src/build", "index.html"));
});

// Start the server on port 8080
app.listen(8080, function () {
  console.log("Server listening on port 8080");
});

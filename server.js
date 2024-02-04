import express from "express";

const PORT = 3000;

const app = express();

// Set static folder
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

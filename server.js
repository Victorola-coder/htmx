import express from "express";

const PORT = 3000;

const app = express();

// Set static folder
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// HANDLE GET REQUESTS

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Doe", age: 25 },
    { id: 3, name: "Bob Smith", age: 40 },
    { id: 4, name: "Alice Johnson", age: 35 },
    { id: 5, name: "Mike Brown", age: 45 },
    { id: 6, name: "Sarah Davis", age: 32 },
    { id: 7, name: "Tom Wilson", age: 28 },
    { id: 8, name: "Emily Anderson", age: 27 },
    { id: 9, name: "David Taylor", age: 26 },
    { id: 10, name: "Lisa Miller", age: 29 },
    { id: 11, name: "Richard Wilson", age: 31 },
    { id: 12, name: "Karen Martinez", age: 33 },
    { id: 13, name: "Jacob Thompson", age: 34 },
    { id: 14, name: "Amanda Garcia", age: 36 },
    { id: 15, name: "Daniel Hernandez", age: 37 },
    { id: 16, name: "Michael Rodriguez", age: 38 },
    { id: 17, name: "Emily Martinez", age: 39 },
  ];

  res.send(`
  <h1 class="text-2xl font-bold my-4">Users</h1>
    <ul>${users.map((user) => `<li>${user.name}</li>`).join("")}</ul>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

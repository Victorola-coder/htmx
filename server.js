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
// you can put the whole function in a setTimeOut Function but i don't need to, my network is so bad and i will see it load
app.get("/users", (req, res) => {
  // const users = [
  //   { id: 1, name: "John Doe", age: 30 },
  //   { id: 2, name: "Jane Doe", age: 25 },
  //   { id: 3, name: "Bob Smith", age: 40 },
  //   { id: 4, name: "Alice Johnson", age: 35 },
  //   { id: 5, name: "Mike Brown", age: 45 },
  // ];

  setTimeout(async () => {
    const limit = +req.query.limit || 10;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
    );

    const users = await response.json();

    res.send(`
  <h1 class="text-2xl font-bold my-4">Users</h1>
    <ul>${users.map((user) => `<li>${user.name}</li>`).join("")}</ul>`);
  }, 2000);
});

// Start the server
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

import express from "express";

const PORT = 3000;

const app = express();

// Set static folder
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// handle post search request

const contact = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Doe", email: "jane@example.com" },
  { name: "Bob Smith", email: "bob@example.com" },
  { name: "Alice Johnson", email: "alice@example.com" },
  { name: "Mike Brown", email: "mike@example.com" },
  { name: "Sara Lee", email: "sara@example.com" },
  { name: "David Kim", email: "david@example.com" },
];

app.post("/search", (req, res) => {
  const searchTerm = req.body.search.toLowerCase();

  if (!searchTerm) {
    return res.send("<tr></tr>");
  }
  const searchResults = contact.filter((contact) => {
    const name = contact.name.toLowerCase();
    const email = contact.email.toLowerCase();

    return name.includes(searchTerm) || email.includes(searchTerm);
  });

  
  
  setTimeout(()=>{
    
    const searchResultHtml = searchResults
      .map(
        (contact) => `
    <tr>
  
    <td><div class="my-4 p-2>${contact.name}</div</td>
    <td><div class="my-4 p-2>${contact.email}</div</td>
    </tr>
    
    `
      )
      .join("");

      
      res.send(searchResultHtml);
    }, 1000)
});

// Start the server
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

const express = require("express");
const fs = require("fs");
s;
const app = express();
// create new post
app.post("/blogs", (req, res) => {
  const { content, title } = req.body;
  try {
    fs.writeFileSync(title, content);
    res.end("ok");
  } catch (error) {
    res.status(500).send("Error creating the post.");
  }
});

//Updating existing posts
app.put("/posts/:title", (req, res) => {
  const { title } = req.params;
  const { content } = req.body;
  if (title || content) {
    try {
      fs.writeFileSync(title, content);
      res.end("ok");
    } catch (error) {
      res.status(500).send("Error updating the post.");
    }
  } else {
    res.status(400).send("Title and content are required.");
  }
});
//Reading posts
app.get("/blogs/:title", (req, res) => {
  const { title } = req.params;
  if (title) {
    res.status(404).send("This post does not exist!");
    return;
  }
  const post = fs.readFileSync(title);
  res.send(content);
});
//Delete the post
app.delete("/blogs/:title", (req, res) => {
  const { title } = req.params;
  if (title) {
    try {
      fs.unlinkSync(title);
      res.end("ok");
    } catch (error) {
      res.status(500).send("Error deleting the post.");
    }
  } else {
    res.status(400).send("Title is required.");
  }
});

// YOUR CODE GOES IN HERE
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

import express from "express";

const app = express();

app.use((req, res) => {
  console.log("The server has received a request!");
  res.send("Hello from Express!");
});

app.listen(8080, () => console.log("Server is listening on port 8080..."));
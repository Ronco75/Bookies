import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App");
});

app.get("/favorites", (req, res) => {
  res.send("Favorites");
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

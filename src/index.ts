import express from "express";

const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API OK",
  });
});

app.get("/hello", (req, res) => {
  res.send("Hello, world !!");
});

app.get("/hello/:name", (req, res) => {
  res.send(`Hello, ${req.params.name} !!`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

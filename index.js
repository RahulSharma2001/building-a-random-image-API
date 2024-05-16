const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Random Image API!");
});

app.get("/api/image/random", async (req, res) => {
  try {
    const response = await axios.get("https://source.unsplash.com/random");
    res.send(response.request.res.responseUrl);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch a random image" });
  }
});

app.listen(5000, () => console.log("server running"));

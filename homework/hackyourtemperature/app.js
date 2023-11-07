
import express from "express";
import keys from "./sources/keys.js";
import fetch from "node-fetch";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.post("/weather", async (req, res) => {
  const city = req.body.city;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys.API_Key}`
    );
    if (response.ok) {
      const data = await response.json();
      const temperature = data.main.temp.toFixed(2);
      res.json({ weatherText: `Weather in ${data.name}: ${temperature}` });
    } else {
      return res.status(404).json({ weatherText: "city is not found!" });

    }
  } catch (error) {
    res.status(500).end("An error occurred while fetching data from the API!");
  }
});

export {app};

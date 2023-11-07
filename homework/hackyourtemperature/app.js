
import express from "express";
import {keys} from "./sources/keys.js";
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
      `https://api.openweathermap.org/data/2.5/weather?APPID=${keys.API_KEY}`
    );
    if (response.status === 404) {
      return res.status(404).json({ weatherText: "city is not found!" });
    } else {
      const data = response.json();
      res.json({ weatherText: `Weather in ${cityName}: ${temperature}°C` });
    }
  } catch (error) {
    res.status(500).send("An error occurred while fetching data from the API!");
  }
});

export {app};

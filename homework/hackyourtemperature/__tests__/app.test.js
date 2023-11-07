import {app} from "../app.js";
import request from "supertest";

describe("Weather Endpoint", () => {
  it("should return weather data for a valid city", async () => {
    const response = await request(app)
      .post("/weather")
      .send({ city: "amsterdam" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("weatherText");
  });
});

describe("Weather Endpoint - Invalid City Names", () => {
  it("should return a 404 status for an invalid city", async () => {
    const response = await request(app)
      .post("/weather")
      .send({ city: "invalidCityName" });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("weatherText", "City is not found!");
  });
    it("should return 400 when not containing a cityName", async () => {
      const response = await request(app).post("/weather").send({
        cityName: "",
      });
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty("weatherText", "City is not found!");
    });
});

import {app} from "../app.js";
import supertest from "supertest";
const request = supertest(app);

describe('Weather Endpoint', () => {
  it('should return weather data for a valid city', async () => {
    const response = await request(app)
      .post('/weather')
      .send({ city: 'amsterdam' }); 

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('weatherText');
  });
    });

describe('Weather Endpoint - Invalid City Names', () => {
  it("should return a 404 status for an invalid city", async () => {
    const response = await request(app).post("/weather").send({ city: "tt" });

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("weatherText", "city is not found!");
  });
  });


const express = require('express');
// init express
const app = express();

app.use(express.json());

//port
const PORT = process.env.PORT || 3000;
//create / end point
app.get('/', (req, res) =>{
  res.send("hello from backend to frontend!");
});
//create /weather end point
app.post("/weather" , (req, res) =>{
  const {city}= req.body;
  res.send(`the city is : ${city}`);
});





app.listen(PORT , ()=>{ console.log(` server is running on port: ${PORT}`)} );
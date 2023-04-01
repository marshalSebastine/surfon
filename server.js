import express from "express";
import request from "request";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/maps/api/', (req, res) => {
  const mapsApiUrl = `https://www.google.com/maps/embed/v1/place?key=apikey
  &q=Bay+of+Life+Surf+School+Ocean+Literacy`;
  req.pipe(request(mapsApiUrl)).pipe(res);
});
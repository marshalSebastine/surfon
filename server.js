import express from "express";
import request from "request";
import DataBaseManager from "./DatabaseManager.js";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import Razorpay from "razorpay";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config()

const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

app.use(cors())

// parse application/json
app.use(bodyParser.json())

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


try {
  await DataBaseManager.connect()
  await DataBaseManager.dropAllCourses()
  await DataBaseManager.addCourseData()
} catch (er) {
  // console.log(er)
}


// DataBaseManager.getAllCourses().then((courses) => {
//   courses.forEach((course) => {console.log(course)})
// })

// create a GET route
app.get('/maps/api/', (req, res) => {
  const mapsApiUrl = `https://www.google.com/maps/embed/v1/place?key=apikey
  &q=Bay+of+Life+Surf+School+Ocean+Literacy`;
  req.pipe(request(mapsApiUrl)).pipe(res);
});
const origin = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : 'https://surfonpeople.onrender.com'

app.get('/allcourses', (_, res) => {
  DataBaseManager.getAllCourses().then((courses) => {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.send(courses)
  })
})

app.post('/orders', async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    let cost = await findTotalCost(req.body.productsPurchasing)
    const options = {
      amount: cost, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };
    console.log('before creating order');
    const order = await instance.orders.create(options);
    console.log('after creating order');
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (!order) return res.status(500).send("Some error occured");
    res.json(order);

  } catch (error) {
    console.log(error, 'black keys')
    res.status(500).send(error);
  }
})

function isDayWeekend(dateString) {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Get the day of the week (0-6, where 0 is Sunday)
  const dayOfWeek = date.getDay();

  // Return true if the day of the week is Saturday or Sunday
  return dayOfWeek === 6 || dayOfWeek === 0;
}

async function  findTotalCost(purchase){
  let totalCost = 0
  for(let product of purchase){
    let productfromdb = await DataBaseManager.getProduct(product._id)
    let price = (productfromdb.endPrice && isDayWeekend(product.dateSelected)) ? productfromdb.endPrice : productfromdb.startPrice;
    totalCost += product.quantity * price
  }

  return totalCost * 100
}
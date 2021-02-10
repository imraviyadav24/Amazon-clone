const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")
('sk_test_51IGlVCGKyarQBTn2LuqpjcDZ6qwvttj0UEReIphEl8ZllEEEe2Xxi5X5uErRlvy9IM4EdiWYN6dDz4vy5ARTv08d008BJK7VEA')


//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
   const total = request.query.total;

   console.log('Payment Request Received BOOM!!! for this amount >>>', total)

   const paymentIntent = await stripe.paymentIntents.create({
       amount: total, //Subunits of the currency
       currency: "INR",
   });

   //OK - Created
   response.status(201).send({
       clientSecret: paymentIntent.client_secret,
   })
})



// Listen Command
exports.api = functions.https.onRequest(app)


//Example Endpoint
//http://localhost:5001/clone-d3c4f/us-central1/api
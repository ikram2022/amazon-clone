const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51MG3hoGyVWpacVxdcdRrMGhyl24lKdHQs2h1V37l87UtOfMd5RhZAmUc4ICJRtkRkNYohZ23WVyOSdApQ88DmP2q00ZQKCVJBv");



// API

// - App onfig
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));


// app.post("", async (request, response) => {
//     const total = request.query.total;

    app.post("/payments/create", async (request, response) => {
        const total = request.query.total;
        
  console.log("Payment request received for this ammount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "gbp",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-f13fd/us-central1/api
require("dotenv").config();

const express = require("express");
const app = express();

const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } = process.env

const stripe = require("stripe")(STRIPE_SECRET_KEY)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        res.render("index", {
            key: STRIPE_PUBLISHABLE_KEY,
            amount: 25
        });
    } catch (err) {
        console.log("The err of render index.ejs is", err);
    }
});

app.post("/payment", async (req, res) => {
    try {
        stripe.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: 'Shirt',
            address: {
                line1: 'TC 9/4 Old MES colony',
                postal_code: '110092',
                city: 'New Delhi',
                state: 'Delhi',
                country: 'India',
            }
        })
            .then((customer) => {
                console.log(customer);
                // return stripe.charges.create({
                //     amount: 7000, // Charing Rs 25
                //     description: 'Web Development Product',
                //     currency: 'USD',
                //     customer: customer.id
                // });
                return stripe.PaymentIntent.create(
                    {
                        customer: customer.id,
                        amount: 7000,
                        description: 'Rails Stripe transaction',
                        currency: 'usd',
                    }
                )
            })
            .then(() => {
                // console.log(PaymentIntent);
                res.send("Success") // If no error occurs
            })
            .catch((err) => {
                console.log(err);
                res.send(err) // If some error occurs
            });
    } catch (err) {
        console.log("The err of payment is", err);
    }
});

app.get("/success", (req, res) => {
    res.render("success");
});

app.get("/fail", (req, res) => {
    res.render("fail");
});

const port = 2500;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
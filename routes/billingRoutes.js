const keys = require('../config/keys');
const stripe = require('stripe')(`${keys.stripeSecretKey}`);
const auth = require('../middlewares/requireLogin');


module.exports=(app)=>{
    app.post('/api/stripe', auth, async (req, res)=>{
        console.log(req.body.id);
        const charge = await stripe.charges.create({
            amount:500,
            currency:"usd",
            description: "$5 for 5 credits",
            source: req.body.id
        }).catch(err=>console.log(err));

        req.user.credits+=5;
        const user = await req.user.save().catch(err=>console.log(err));

        res.send(user);
    });
};
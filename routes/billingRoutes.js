const keys = require('../config/keys');
const stripe = require('stripe')(keys.stringSecretKey);
const auth = require('../middlewares/requireLogin');


module.exports=(app)=>{
    app.post('/api/stripe', auth, async (req, res)=>{
        const charge = await stripe.charges.create({
            amount:500,
            currency:usd,
            description: "$5 for 5 credits",
            source: req.body.id
        })

        req.user.credits+=5;
        const user = await req.user.save();

        res.send(user);
    });
};
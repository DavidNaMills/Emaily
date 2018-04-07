require('./models/User');
require('./services/passport');

const express = require('express') ;
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

const PORT = process.env.PORT ||  5000;
const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoDbURI);

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}));

app.use( passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

 
app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`);
});
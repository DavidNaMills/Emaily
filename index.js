require('./models/User');
require ('./models/Survey');
require('./services/passport');

const express = require('express') ;
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

const PORT = process.env.PORT ||  5000;
const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoDbURI);

app.use(bodyParser.json());

app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
}));

app.use( passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV==="production"){
    const path=require('path');
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
}


app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`);
});
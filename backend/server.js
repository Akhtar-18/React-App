const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path')
const User = require('./models/userModel')
const routes = require('./routes/routes');
 
const { PORT, JWT_SECRET } = require('./database/db')

/*require("dotenv").config({
 path: path.join(__dirname, "../.env")
}); */
 
/*mongoose
 .connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
 .then(() => {
  console.log('Connected to the Database successfully');
 }); */


const app = express();
 
//const PORT = process.env.PORT || 3000;
 
app.use(cors());  

app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(async (req, res, next) => {
 if (req.headers["x-access-token"]) {
  const accessToken = req.headers["x-access-token"];
  const { userId, exp } = await jwt.verify(accessToken, JWT_SECRET);
  // Check if token has expired
  if (exp < Date.now().valueOf() / 1000) { 
   return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
  } 
  res.locals.loggedInUser = await User.findById(userId); next(); 
 } else { 
  next(); 
 } 
});
 
app.use('/', routes); 

app.use('/static', express.static(path.join(`${__dirname}/public`)));

app.get('/', (req, res) => res.send('Home Route'));

//Connecting with Backend
app.post('/backend', (req, res) => { 
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

app.listen(PORT, () => {
  console.log('Server is listening on Port:', PORT)
})
app.use(async (req, res, next) => {
    if (req.headers["x-access-token"]) {
     const accessToken = req.headers["x-access-token"];
     const { userId, exp } = await jwt.verify(accessToken, JWT_SECRET);
     // Check if token has expired
     if (exp < Date.now().valueOf() / 1000) {
      return res.status(401).json({
       error: "JWT token has expired, please login to obtain a new one"
      });
     }
     res.locals.loggedInUser = await User.findById(userId);
     next();
    } else {
     next();
    }
  });
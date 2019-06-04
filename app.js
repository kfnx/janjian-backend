const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const mongoose = require('mongoose');
const app = express()

const url = `${process.env.MONGODB_URI}?ssl=true&retryWrites=true`;
const apiroutes = require('./routes/api_route.js');

app.use(express.json()) //sets content-type to json
// app.use('/', (req, res, next) => {
//     res.send('wellcome hellow')
// }); //using routes specified externally
app.use('/test', apiroutes); //using routes specified externally


mongoose.connect(url,{useNewUrlParser: true})
  .then(()=>{
    app.listen(process.env.PORT);
    console.log(`database connected! server in ${process.env.PORT}`);})
  .catch(err => console.log(err));

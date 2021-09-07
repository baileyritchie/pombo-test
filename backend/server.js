const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = 5000; // replace this with env
const paymentsRouter = require('./routes/paymentsRouter');

//CORS
app.use(cors())

//routes

app.use('/api/payments', paymentsRouter);

app.all('*', (req,res,next) => {
  console.log('Cannnot find that route')
});


// finally, run the app

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
})



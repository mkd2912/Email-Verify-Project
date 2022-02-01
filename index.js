const express=require('express');
const app=express();
const mongoose=require('mongoose');

const mail=require('./email.js')

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userdb')
  .then(()=>console.log("Connect to Mongodb!"))
  .catch( err => console.error("Mongdb connection failed.!"));

  const auth=require('./routes/auth');



app.use('/api/user',auth);



const port=process.env.PORT||3000
app.listen(port,()=>console.log('App is runnig on ',port));
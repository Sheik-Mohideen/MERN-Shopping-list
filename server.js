const express=require('express');
const mongoose=require('mongoose');
const config=require('config');

const app=express();

//Middleware body-parser
app.use(express.json());
//Mongoo URI
const db=config.get('mongoURI');
//Mongoo Connect
mongoose
.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true  } )
 .then(()=> console.log("Mongodb Connected..."))
 .catch(err=>console.log(err));

 //Use routes
 app.use('/api/items',require('./routes/api/items'));
 app.use('/api/users',require('./routes/api/user'));
 app.use('/api/auth',require('./routes/api/auth'));

 const port=process.env.PORT||5000;
 app.listen(port,()=> console.log(`Server started on port ${port}`));
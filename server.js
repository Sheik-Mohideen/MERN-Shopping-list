const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const bodyParser = require('body-parser');

const app=express();

//Middleware body-parser
app.use(express.json());
//Mongoo URI

//Mongoo Connect
mongoose
.connect('mongodb+srv://sheik:Sheik@7777@cluster0-wu9vf.mongodb.net/MERN?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true  } )
 .then(()=> console.log("Mongodb Connected..."))
 .catch(err=>console.log(err));

 //Use routes
 app.use('/api/items',require('./routes/api/items'));
 app.use('/api/users',require('./routes/api/user'));

 const port=process.env.PORT||5000;
 app.listen(port,()=> console.log(`Server started on port ${port}`));
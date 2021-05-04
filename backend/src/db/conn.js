  const mongoose = require('mongoose');

   const url = process.env.CONNECTION_DB
   mongoose.connect(`${url}`,{
       useCreateIndex:true,
       useFindAndModify:false,
       useNewUrlParser:true,
       useUnifiedTopology:true,
     
       
       
   }).then(() => console.log("connection success full sv school-management ")).catch((error) => console.log(error));
   
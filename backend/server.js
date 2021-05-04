 // Create app
const express = require('express');
const app = express();
const socketio = require("socket.io");
const http = require("http")
const server = http.createServer(app)
const io = socketio(server,{cors:{origin:"*"}});
const cors = require("cors");

//dot env require 
const dotenv = require('dotenv');
dotenv.config();

//cooki-parser
const cookiparser = require('cookie-parser');


app.use(express.static('uplode'))
//database connection
require('./src/db/conn');

//static foldet


///middleware 
app.use(cors());
app.use(express.json());

app.use(cookiparser());
//auth routers
app.use('/Adminuser',require('./src/routers/auth'));

app.use('/',require('./src/routers/getroutes'));

app.use("/",require('./src/routers/room'));


app.use("/quiz",require('./src/routers/quize'));

//socket io functionality


//    const data = new quizedata({
//         mainquizedata:[
//                 {
//                         Created:"gajera harsh",
//                         Quistion:"who are you ?",
//                         Options:["harsh","harshgajera","gajeraharsh","gajera"],
//                         Quistion_answare:"harsh"
//                 }
//         ]
//    });

//       data.save((error,data) => {
//                  if(error) return console.log(error)
//                //  if(data)  {console.log(data)}
//       });
// const Maindata = {
//                         Created:"gajera ",
//                         Quistion:"who are you ?",
//                         Options:["harsh","harshgajera","gajeraharsh","asgsd"],
//                         Quistion_answare:"harsh"
// }
//         const updatadata = quizedata.findByIdAndUpdate("608ab1278023092458dfd73e",{
//              $push:{mainquizedata:Maindata}
//         },{new:true},(error,data) => {
//                 if(error) console.log(error);
//                 console.log(data)
//         });

        
// Create server 
server.listen(process.env.PORT,() => {
        console.log(`Server is running port nommber ${process.env.PORT}`)
})
 
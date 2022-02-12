 //require the library
const mongoose = require('mongoose');

 //mongoose will connect to database(mongofb) , using function connect
mongoose.connect('mongodb://localhost/dendless_db');

//Verify whether is is connected or not
//connection which is present between database & mongoose is db & fetched through connection
const db  = mongoose.connection

//db will be used to verifying that connection happened or not

//check error
db.on('error' , console.error.bind(console, 'error connecting to db'));
//if no error up & running
db.once('open' , function(){
console.log("Successfully connected to database");
});
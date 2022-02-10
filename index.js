const express= require('express')
const port = 3000;
const app = express();
app.use('/' , require('./routes/index'));

//set up template engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

app.listen(port , function(err){
    if(err){
        console.log(`Error in connecting to the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});


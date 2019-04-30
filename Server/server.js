const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const app = express();
const recipeList = "/api/recipe"
require('dotenv').config(); //configures the server to use environment variables 
const rControl = require(_dirname + '/controllers/recipe_controller'); 


var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors());
app.use(bodyParser.json());

app.get(`${recipeList}/:id`, rControl.read);


app.get('/api/test', (req, res, next)=>{
   res.send("this works"); 
})

// app.post('/api/recipe', (req, res, next)=>{
//     recipes.push(req.body)
//     res.send(recipes)
//  })


const port = process.env.PORT || 5000; ///distinguishes the port number 
app.listen(port, ()=>{ // method that passes in the port we ar listening on 
    console.log(`running on port ${port}`) // accesses the port var to say what port to listen to 
})
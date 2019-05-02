const express = require('express'); 
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const app = express();
// const recipeList = "/api/recipe"
require('dotenv').config(); //configures the server to use environment variables 
// const rControl = require(__dirname + '/controllers/recipe_controller'); 
let newRecipeList = []; 
let id = 0;

var corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors());
app.use(bodyParser.json());



app.get('/api/test', (req, res, next)=>{   //get endpoint is retrieving data/pulling data in (good for reaching out to api)
   res.send("this works"); //sending back to the front end
})

app.get('/api/getRecipes', (req, res)=>{
    res.send(newRecipeList); 
})

app.get('/api/getRecipe/:id', (req, res)=> {
    console.log('this is req.body: ', +req.params.id)
    console.log(newRecipeList[+req.params.id]);
    res.send(newRecipeList[+req.params.id]);
}) 

app.post('/api/createRecipe', (req, res, next)=>{
    console.log(req.body)
    newRecipeList.push({
        id: id,
        title: req.body.title,
        ingredients: req.body.ingredients}) 
    id++  
    console.log(newRecipeList)
    // recipes.push(req.body)   ..  //push the data into newRecipeList 
    res.send(newRecipeList)          // res.send(recipes)    //send it back using res.send 
 })


const port = process.env.PORT || 5000; ///distinguishes the port number 
app.listen(port, ()=>{ // method that passes in the port we ar listening on 
    console.log(`running on port ${port}`) // accesses the port var to say what port to listen to 
})
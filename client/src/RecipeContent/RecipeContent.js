import React, {Component} from 'react'; 
import axios from 'axios';  //http library, it is the engine that is able to utilize http requests// its the instigator or the mover from one ip to another to send and retrieve data  
import './RecipeContent.css'; 
import data from '../data.js'; 
import AddIngredient from './components/AddIngredient'; 
import SubmitRecipe from './components/SubmitRecipe'; 
import DeleteRecipe from './components/DeleteRecipe'; 
import FileBox from './components/FileBox'; 
import Header from './components/Header'; 
import ArrowButtons from './components/ArrowButtons';
import RecipeCard from './components/RecipeCard'; 

class RecipeContent extends Component {
  
    constructor(props) { //whne your accessing props you are accessing a parent from a child 
        super(props); 
    
        this.state = {
          testObj : data,  // this is my data I will be pulling from for API 
          title : "",  // empty string for my title 
          ingredients: [],  // empty array for ingredients 
          ingredient: "",  //empty string for each ingredient 
          recipes: [], 
          selectedRecipe : { }, 
          calories : " ", 
          yield: 1 , 
          fat: " ", 
          carb: " ",
          fiber: " "
        }; 
    }
    //spread operator is a modern way of throwing array data inside of another array, it takes what is there and adds to it 
   
    analyzeRecipeContent=(investigation) => {
      this.setState({
        analysis: investigation 
      })
    }

    componentDidMount(){
      axios.get('/api/getRecipes').then(res => {
        this.setState({
          recipes: res.data, 
        })
      }) 
    }

    handleTitleChange= (e) => {  //this is to set the title to whatever is in the input 
      this.setState({
        title: e.target.value 
      })
    }

    handleIngredientChange= (e) => {  //this is to set the ingredient to whatever is in the input 
      this.setState({
        ingredient: e.target.value 
      })
    }

    handleIngredientsClick= (e) => { //when the add button is clicked 
      e.preventDefault()
      this.setState({
        ingredients: [...this.state.ingredients,this.state.ingredient] // 
      })
    }

    postDataToServer= (e) => {
      e.preventDefault()
      let newRecipe = { 
        title: this.state.title,   
        ingredients: [...this.state.ingredients] 
      }; 
      axios.post('/api/createRecipe', newRecipe).then(res => { 
        this.setState({recipes: res.data, ingredients: [], ingredient: "", title: ""}); 
        //console.log(res.data)
      }) 
      ///accesses the title and ingredients in prep to send them to the back end
      //I want to send it to this location, I want to send this piece of code/ and then sends the newRecipe to the back end. .then is what will happen after your promise is resolved, or the code ahead of it similar to a CB, so the .then is when you get your response back from the backend.//post the data back to state to my recipes and // then send it down to a child component utilitzing props 

    }

    showRecipe=(recipe) => {
      console.log('recipe hit')
      const {title, ingredients} = recipe; 
      let config = {
        headers: {
          'Content-Type': 'application/json' 
        }
      }
      let recipeAnalysis = {
        title: title, 
        ingr: ingredients
      }; 

      axios.post(`https://api.edamam.com/api/nutrition-details?app_id=1476c8c7&app_key=a77d6976afe7c2ed195b70536e293653`,recipeAnalysis ,config).then(res => {
        console.log('test', res.data)
        this.setState({
          calories : res.data.calories, 
          yield : res.data.yield,
          fat: res.data.totalNutrients.FAT.quantity,
          carb: res.data.totalNutrients.CHOCDF.quantity, 
          fiber: res.data.totalNutrients.FIBTG.quantity,
          selectedRecipe: recipe, 

        })
      })
    } 
      
//if state changes, after you have made your change it will automatically render and everything will reflect the new change. And the values will be updated if they are pulling from state. // 

        render(){
          console.log(this.state.selec)
            return ( 
              <div className="App">  
                  <Header/>
                  <div id="leftNav">
                  <FileBox recipes={this.state.recipes} showRecipe={this.showRecipe}/>
                  </div>
                  <div id="mainInputs">
                  <SubmitRecipe state={this.state} changeTitle={this.handleTitleChange} click={this.postDataToServer}/>
                  <AddIngredient state={this.state} changeIngredient={this.handleIngredientChange} click={this.handleIngredientsClick}/>
                  </div>
                  <div> 
                    <RecipeCard 
                      recipe={this.state.selectedRecipe}
                      calories={this.state.calories}
                      yields={this.state.yield}
                      fat={this.state.fat}
                      carb={this.state.carb}
                      fiber={this.state.fiber}
                    /> 
                  </div> 
                  {/* //recipe in RecipeCard above is the prop, the prop is what you create it to be this is where it is declared, but you are accessing state from this prop*/}
                  <div>
                  <ArrowButtons/>
                  <DeleteRecipe/>
                  </div>
                </div>
            ) 
        }
    }

    export default RecipeContent;

